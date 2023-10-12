import { UserError } from '@/modules/users/errors';
import { Either } from '@/shared/errors';
import { Failure } from '@/shared/protocols';

export namespace GetUsers {
  export type Input = {
    since: string;
  };

  export type Output = Either<Failure<UserError.UserNotFound>, any>;
}
export interface GetUsers {
  getUser(input: GetUsers.Input): Promise<GetUsers.Output>;
}
