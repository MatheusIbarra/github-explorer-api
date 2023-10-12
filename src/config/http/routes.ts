import { readdirSync } from 'fs';
import path from 'path';

import express, { Express, Router } from 'express';

const loadAppRoutes = async () => {
  const routesFiles: string[] = [];
  const modulesPath = path.join(__dirname, '..', '..', 'modules');
  readdirSync(modulesPath).forEach(modulePath => {
    if (modulePath.startsWith('_')) return;
    const routesPath = path.join(modulesPath, modulePath, 'routes');

    readdirSync(routesPath)
      .filter(file => !file.endsWith('.map'))
      .map(async file => {
        routesFiles.push(path.resolve(routesPath, file));
      });
  });

  const promises = routesFiles.map(routeFile => import(routeFile));
  const routes = await Promise.all(promises);

  return routes;
};

export const setupRoutes = async (app: Express): Promise<void> => {
  const tmpFolder = path.resolve(__dirname, '..', '..', '..', 'tmp');
  app.use('/files', express.static(tmpFolder));

  app.use('/status', (req, res) =>
    res.status(200).json({
      message: `Github Explorer lives !`,
    }),
  );
  const router = Router();

  const routes = await loadAppRoutes();

  // eslint-disable-next-line no-restricted-syntax
  for await (const route of routes) {
    route.default(router);
  }
  app.use(router);
};
