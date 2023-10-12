/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from 'express';
import { container } from 'tsyringe';

import { Controller } from '@/shared/protocols';

export function useHandler(controller: any): RequestHandler<any> {
  return async (request: Request, response: Response) => {
    const resolvedController = container.resolve(controller) as Controller;
    return resolvedController.handle(request, response);
  };
}
