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

  async getUser({ since, perPage, q }: GetUsersRepo.Input): Promise<any> {
    let queryString = q ? q : 'type%3Auser';
    let data;
    if (!q) {
      data = await this.httpClient.get({
        url: `${env.app.github_url}/users`,
        params: {
          since,
          per_page: perPage,
        },
      });
    }

    const { items, total_count } = await this.httpClient.get({
      url: `${env.app.github_url}/search/users?q=${queryString}`,
    });

    if (q) {
      data = items;
    }

    return { total_count, data };
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
