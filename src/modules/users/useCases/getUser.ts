import { inject, singleton } from 'tsyringe';

import { GetUsersRepo } from '@/modules/users/contracts/repositories';
import { PgUserRepository } from '../infra/repositories';
import { User } from '../contracts/dtos';

export namespace GetUsers {
  export type Params = {
    since: string;
    perPage: string;
    q?: string;
  };
  export type Result = {
    results: {
      users: User[];
      pagination: {
        nextPage: string;
        perPage: string;
        totalCount: string;
      };
    };
  };
}

@singleton()
export class GetUserUseCase {
  constructor(
    @inject(PgUserRepository)
    private userRepo: GetUsersRepo,
  ) {}

  async perform({
    since,
    q,
    perPage,
  }: GetUsers.Params): Promise<GetUsers.Result> {
    const { total_count, data } = await this.userRepo.getUser({
      since,
      q,
      perPage,
    });

    const results = {
      results: data,
      pagination: {
        nextPage: data[data.length - 1]?.id,
        perPage,
        totalCount: total_count,
      },
    } as GetUsers.Result;

    return results;
  }
}
