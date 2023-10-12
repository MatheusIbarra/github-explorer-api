import 'express-async-errors';
import express from 'express';

import { setupHeaders } from './headers';
import { setupMiddlewares } from './middlewares';
import { setupRoutes } from './routes';
import { setupSwagger } from './swagger';

export async function getExpressApp() {
  const app = express();
  setupHeaders(app);
  setupSwagger(app);
  setupMiddlewares(app);
  await setupRoutes(app);

  return app;
}
