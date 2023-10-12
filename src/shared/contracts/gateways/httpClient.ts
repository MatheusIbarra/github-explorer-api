/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectData } from '@/shared/helpers';

export namespace HttpGetClient {
  export type Input = {
    url: string;
    params?: ObjectData;
  };
}

export interface HttpGetClient {
  get: <T = any>(input: HttpGetClient.Input) => Promise<T>;
}
