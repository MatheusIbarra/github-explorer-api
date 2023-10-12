/* eslint-disable @typescript-eslint/no-explicit-any */
import { internalServerError } from '@/shared/errors';
import { Failure, HttpResponse } from '@/shared/protocols';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: undefined,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data,
});

export const badRequest = (error: Failure<any>): HttpResponse => ({
  statusCode: 400,
  data: error,
});

export const conflict = (error: Failure<any>): HttpResponse => ({
  statusCode: 409,
  data: error,
});

export const unprocessableEntity = (error: Failure<any>): HttpResponse => ({
  statusCode: 422,
  data: error,
});

export const forbidden = (error: Failure<any>): HttpResponse => ({
  statusCode: 403,
  data: error,
});

export const notFound = (error: Failure<any>): HttpResponse => ({
  statusCode: 404,
  data: error,
});

export const unauthorized = (error: Failure<any>): HttpResponse => ({
  statusCode: 401,
  data: error,
});

export const serverError = (error: unknown): HttpResponse => ({
  statusCode: 500,
  data: internalServerError(error as Error),
});
