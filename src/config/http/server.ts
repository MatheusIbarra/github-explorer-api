/* eslint-disable no-console */
import 'reflect-metadata';
// import 'newrelic';
import { verifyEnvironmentVariables } from '@/config/env';
import { env } from '@/shared/helpers';

import { getExpressApp } from './app';

async function startHttpServer() {
  const error = verifyEnvironmentVariables();
  if (error) {
    console.error(error);
    return;
  }

  try {
    const app = await getExpressApp();
    app.listen(env.app.port, () => {
      console.log(`Server running at http://localhost:${env.app.port}/api`);
    });
  } catch (err) {
    console.error(err);
  }
}

startHttpServer();
