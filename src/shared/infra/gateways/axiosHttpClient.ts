/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { singleton } from 'tsyringe';

import { HttpGetClient } from '@/shared/contracts/gateways';

@singleton()
export class AxiosHttpClient implements HttpGetClient {
  async get<T = any>(input: HttpGetClient.Input): Promise<T> {
    const { url, params } = input;
    const result = await axios.get(url, { params });
    return result.data;
  }
}
