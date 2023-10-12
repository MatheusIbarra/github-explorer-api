/* eslint-disable no-console */
import { Response } from 'express';

import { internalServerError } from '@/shared/errors';

import { HttpRequest, HttpResponse } from './http';

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
    } catch (error) {
      console.error(error);

      return httpResponse.status(500).json(internalServerError(error as Error));
    }
  }
}
