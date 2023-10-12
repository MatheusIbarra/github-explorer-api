import { Express } from 'express';
import helmet from 'helmet';

export const setupHeaders = (app: Express): void => {
  app.use(helmet.frameguard({ action: 'sameorigin' }));

  app.disable('x-powered-by');
};
