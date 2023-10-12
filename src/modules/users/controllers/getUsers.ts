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
      q: z.string().optional(),
      perPage: z.string().optional(),
    });

    const { since, q, perPage } = getUsersSchema.parse(request.query);

    const users = await this.getUsers.perform({
      since,
      q,
      perPage: perPage ? perPage : '15',
    });

    return ok(users);
  }
}
