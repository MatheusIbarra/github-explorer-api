/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';

export type HttpRequest = Request;
export type HttpResponse = {
  statusCode: number;
  data: any;
};
