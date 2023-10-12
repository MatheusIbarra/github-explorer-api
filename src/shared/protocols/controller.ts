/* eslint-disable no-console */
import { Response } from 'express';

import {
  internalServerError,
  notFoundError,
  validationError,
} from '@/shared/errors';

import { HttpRequest, HttpResponse } from './http';
import { ZodError } from 'zod';

export abstract class Controller {
  abstract perform(request: HttpRequest): Promise<HttpResponse>;

  async handle(
    httpRequest: HttpRequest,
    httpResponse: Response,
  ): Promise<Response> {
    try {
      const { statusCode, data } = await this.perform(httpRequest);
      let body = data;
      if (statusCode >= 400) {
        body = {
          status: 'error',
          ...data,
        };
      }
      return httpResponse.status(statusCode).json(body);
    } catch (error: any) {
      if (error instanceof ZodError) {
        return httpResponse.status(400).json(validationError(error));
      }

      if (error.response.status === 404) {
        return httpResponse.status(404).json(notFoundError());
      }

      return httpResponse.status(500).json(internalServerError(error as Error));
    }
  }
}
