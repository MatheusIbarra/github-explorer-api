import { Failure } from '@/shared/protocols';

export enum UserError {
  UserNotFound = 'UserNotFoundError',
}

export const userNotFoundError = (): Failure<UserError.UserNotFound> => {
  return {
    type: UserError.UserNotFound,
    friendly_message: 'User not found.',
  };
};
