import { inject, injectable } from 'tsyringe';

import { ok } from '@/shared/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/shared/protocols';
import { GetUserDetailsUseCase } from '../useCases';
import { z } from 'zod';

@injectable()
export class GetUserDetailsController extends Controller {
  constructor(
    @inject(GetUserDetailsUseCase)
    private readonly getUsers: GetUserDetailsUseCase,
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
