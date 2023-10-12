import { inject, singleton } from 'tsyringe';

import { GetUserDetailsRepo } from '@/modules/users/contracts/repositories';
import { PgUserRepository } from '../infra/repositories';

export namespace GetUserDetails {
  export type Params = {
    username: string;
  };
  export type Result = {
    user: any;
  };
}

@singleton()
export class GetUserDetailsUseCase {
  constructor(
    @inject(PgUserRepository)
    private userRepo: GetUserDetailsRepo,
  ) {}

  async perform({
    username,
  }: GetUserDetails.Params): Promise<GetUserDetails.Result> {
    const user = await this.userRepo.getUserDetails({ username });
    return user;
  }
}
