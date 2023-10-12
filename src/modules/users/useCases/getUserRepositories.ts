import { inject, singleton } from 'tsyringe';

import { GetUserRepositoriesRepo } from '@/modules/users/contracts/repositories';
import { PgUserRepository } from '../infra/repositories';
import { Repository } from '../contracts/dtos';

export namespace GetUserRepositories {
  export type Params = {
    username: string;
  };
  export type Result = {
    repositories: Repository[];
  };
}

@singleton()
export class GetUserRepositoriesUseCase {
  constructor(
    @inject(PgUserRepository)
    private userRepo: GetUserRepositoriesRepo,
  ) {}

  async perform({
    username,
  }: GetUserRepositories.Params): Promise<GetUserRepositories.Result> {
    const user = await this.userRepo.getUserRepositories({ username });
    return user;
  }
}
