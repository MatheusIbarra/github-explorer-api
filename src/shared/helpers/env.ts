import { EnvironmentVariable } from '@/config/env/variables';

import { NodeEnv } from './nodeEnv';

const getEnvVar = (env: `${EnvironmentVariable}`): string => {
  return process.env[env] as string;
};

export const env = {
  node: getEnvVar('NODE_ENV') as `${NodeEnv}`,
  app: {
    port: getEnvVar('APP_PORT') || 3333,
  },
};
