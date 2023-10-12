import { inject, injectable } from 'tsyringe';

import { ok } from '@/shared/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/shared/protocols';
import { z } from 'zod';
import { GetUserRepositoriesUseCase } from '../useCases';

@injectable()
export class GetUserRepositoriesController extends Controller {
  constructor(
    @inject(GetUserRepositoriesUseCase)
    private readonly getUsers: GetUserRepositoriesUseCase,
  ) {
    super();
  }

  async perform(request: HttpRequest): Promise<HttpResponse> {
    const getUserDetailSchema = z.object({
      username: z.string(),
    });

    const { username } = getUserDetailSchema.parse(request.params);

    const users = await this.getUsers.perform({
      username,
    });

    return ok(users);
  }
}
