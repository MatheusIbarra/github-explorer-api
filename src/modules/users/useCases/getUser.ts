import { inject, singleton } from 'tsyringe';

import { GetUserRepo } from '@/modules/users/contracts/repositories';

export namespace GetUser {
  export type Params = {
    username: string;
  };
  export type Result = {
    user: any;
  };
}

@singleton()
export class GetUserUseCase {
  constructor(private userRepo: GetUserRepo) {}

  async perform({ username }: GetUser.Params): Promise<GetUser.Result> {
    const user = await this.userRepo.getUser({ username });

    return user;
  }
}
