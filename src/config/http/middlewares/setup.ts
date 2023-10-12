import { Express, json } from 'express';

import { rateLimiter } from './rateLimiter';

export const setupMiddlewares = (app: Express): void => {
  app.use(json());

  app.use((req, res, next) => {
    res.type('json');
    next();
  });
};
