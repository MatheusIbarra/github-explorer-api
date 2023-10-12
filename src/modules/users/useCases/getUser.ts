import { inject, singleton } from 'tsyringe';

import { GetUsersRepo } from '@/modules/users/contracts/repositories';
import { PgUserRepository } from '../infra/repositories';
import { User } from '../contracts/dtos';

export namespace GetUsers {
  export type Params = {
    since: string;
  };
  export type Result = {
    results: {
      users: User[];
      pagination: {
        nextPage: string;
        perPage: string;
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

  async perform({ since }: GetUsers.Params): Promise<GetUsers.Result> {
    const users = await this.userRepo.getUser({ since });

    const results = {
      results: users,
      pagination: {
        nextPage: users[users.length - 1]?.id,
        perPage: 15,
      },
    } as GetUsers.Result;

    return results;
  }
}
