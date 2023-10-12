import 'dotenv/config';
import { requiredEnvVars } from './variables';

export const verifyEnvironmentVariables = (): undefined | string => {
  const notProvidedVars = requiredEnvVars.reduce(
    (accumulator: string[], requiredVar) => {
      const varIsDefined = !!process.env[requiredVar];
      if (!varIsDefined) {
        accumulator.push(requiredVar);
      }
      return accumulator;
    },
    [],
  );

  if (notProvidedVars.length) {
    const formattedVars = notProvidedVars.join(', ');
    return `\nThese required environment variables are not defined: ${formattedVars}.\nPlease update your .env file.\n`;
  }

  return undefined;
};
