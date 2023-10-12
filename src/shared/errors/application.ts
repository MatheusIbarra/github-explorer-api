import { Failure } from '@/shared/protocols';

export enum ApplicationErrors {
  InternalServerError = 'InternalServerError',
  ValidationError = 'ValidationError',
  NotFoundError = 'NotFound',
}

export const internalServerError = (
  error: Error,
): Failure<ApplicationErrors.InternalServerError> => {
  const defaultErrorMessage = 'Internal server error';
  const errorMessage = error.stack ? error.stack : defaultErrorMessage;
  const reason = errorMessage;

  return {
    type: ApplicationErrors.InternalServerError,
    reason,
    friendly_message: 'Internal server error',
  };
};

export const notFoundError = () => {
  return {
    type: ApplicationErrors.NotFoundError,
    reason: 'We does not found an entity with this infos',
  };
};

export class UnexpectedBehaviorError extends Error {
  constructor() {
    super('Unexpected behavior error');
    this.name = 'UnexpectedBehaviorError';
  }
}

export class NotFoundError extends Error {
  constructor() {
    super('Unexpected behavior error');
    this.name = ApplicationErrors.NotFoundError;
  }
}
