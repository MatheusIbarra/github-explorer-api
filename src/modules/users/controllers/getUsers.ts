import { inject, injectable } from 'tsyringe';

import { GetUsers } from '@/modules/users/contracts/gateways';
import { noContent, ok } from '@/shared/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/shared/protocols';
import { GetUserUseCase } from '../useCases';
import { z } from 'zod';

@injectable()
export class GetUserController extends Controller {
  constructor(
    @inject(GetUserUseCase)
    private readonly getUsers: GetUserUseCase,
  ) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const getUsersSchema = z.object({
      since: z.string(),
    });

    const { since } = getUsersSchema.parse(request.query);

    const users = await this.getUsers.perform({
      since,
    });

    return ok(users);
  }
}
