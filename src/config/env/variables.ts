export enum EnvironmentVariable {
  NODE_ENV = 'NODE_ENV',
  APP_PORT = 'APP_PORT',
}

export const requiredEnvVars = [
  EnvironmentVariable.NODE_ENV,
  EnvironmentVariable.APP_PORT,
];
