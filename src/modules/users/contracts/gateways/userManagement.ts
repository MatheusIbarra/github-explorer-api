import { UserError } from '@/modules/users/errors';
import { Either } from '@/shared/errors';
import { Failure } from '@/shared/protocols';

export namespace GetUser {
  export type Input = {
    username: string;
  };

  export type Output = Either<Failure<UserError.UserNotFound>, any>;
}
export interface GetUser {
  getUser(input: GetUser.Input): Promise<GetUser.Output>;
}
