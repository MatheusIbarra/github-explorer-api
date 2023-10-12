export enum EnvironmentVariable {
  NODE_ENV = 'NODE_ENV',
  APP_PORT = 'APP_PORT',
  GITHUB_URL = 'GITHUB_URL',
}

export const requiredEnvVars = [
  EnvironmentVariable.NODE_ENV,
  EnvironmentVariable.APP_PORT,
  EnvironmentVariable.GITHUB_URL,
];
