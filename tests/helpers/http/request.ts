import request from 'supertest';

import { RequestMethod } from '@/../docs/reporter/contracts';
import { getExpressApp } from '@/config/http/app';

export type HttpHeader = { name: string; value: any };

export type JestHttpRequest = {
  method: `${RequestMethod}`;
  body?: object;
  path: string;
};
export const httpRequest = async (
  input: JestHttpRequest,
): Promise<request.Test> => {
  const { path, method, body } = input;
  const formattedMethod = method.toLocaleLowerCase() as
    | 'post'
    | 'get'
    | 'put'
    | 'patch';

  const app = await getExpressApp();
  console.log(path, body);
  const supertestRequest = request(app)[formattedMethod](path).send(body);

  const response = await supertestRequest;

  return response;
};
