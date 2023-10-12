import { inject, singleton } from 'tsyringe';

import {
  GetUsersRepo,
  GetUserDetailsRepo,
  GetUserRepositoriesRepo,
} from '@/modules/users/contracts/repositories';
import { AxiosHttpClient } from '@/shared/infra/gateways';
import { HttpGetClient } from '@/shared/contracts/gateways';
import { env } from '@/shared/helpers';

@singleton()
export class PgUserRepository
  implements GetUsersRepo, GetUserDetailsRepo, GetUserRepositoriesRepo
{
  constructor(
    @inject(AxiosHttpClient)
    private readonly httpClient: HttpGetClient,
  ) {}

  async getUser(input: GetUsersRepo.Input): Promise<any> {
    const data = await this.httpClient.get({
      url: `${env.app.github_url}/users`,
      params: {
        since: input.since,
      },
    });

    return data;
  }

  async getUserDetails(input: GetUserDetailsRepo.Input): Promise<any> {
    const data = await this.httpClient.get({
      url: `${env.app.github_url}/users/${input.username}`,
    });

    return data;
  }

  async getUserRepositories(input: GetUserDetailsRepo.Input): Promise<any> {
    const data = await this.httpClient.get({
      url: `${env.app.github_url}/users/${input.username}/repos`,
    });

    return data;
  }
}
