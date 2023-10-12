import { inject, injectable } from 'tsyringe';

import { GetUser } from '@/modules/users/contracts/gateways';
import { noContent } from '@/shared/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/shared/protocols';

@injectable()
export class GetUserController extends Controller {
  constructor(private readonly getUser: GetUser) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    return noContent();
  }
}
