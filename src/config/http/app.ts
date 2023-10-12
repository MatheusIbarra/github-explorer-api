import 'express-async-errors';
import express from 'express';

import { setupHeaders } from './headers';
import { setupMiddlewares } from './middlewares';
import { setupRoutes } from './routes';
import { setupSwagger } from './swagger';
import { corsSetup } from './middlewares/corsSteup';

export async function getExpressApp() {
  const app = express();

  setupHeaders(app);
  setupSwagger(app);
  setupMiddlewares(app);
  app.use(corsSetup);
  await setupRoutes(app);

  return app;
}
