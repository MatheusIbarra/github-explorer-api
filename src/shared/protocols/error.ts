import { ZodIssue } from 'zod';

export interface Failure<FailureType extends string> {
  type: FailureType;
  reason?: string | ZodIssue[];
  friendly_message: string;
}
