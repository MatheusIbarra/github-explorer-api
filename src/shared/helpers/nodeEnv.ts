import { env } from './env';

export enum NodeEnv {
  dev = 'development',
  test = 'test',
}

export const getShortedNodeEnv = () => {
  switch (env.node) {
    case 'development':
      return 'dev';
    default:
      return 'test';
  }
};

export const inDevEnvironment = env.node === NodeEnv.dev;
export const inTestEnvironment = env.node === NodeEnv.test;
