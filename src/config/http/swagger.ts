/* eslint-disable no-console */
import { resolve } from 'path';

import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

import { inDevEnvironment } from '@/shared/helpers';

const getSwaggerDocPath = () => {
  let path: string;
  if (inDevEnvironment) {
    path = resolve(__dirname, '..', '..', '..', 'docs', 'swagger.yaml');
  } else {
    path = resolve(__dirname, '..', '..', 'swagger.yaml');
  }

  return path;
};

export const setupSwagger = (app: Express): void => {
  try {
    const document = yaml.load(getSwaggerDocPath());
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(document));
  } catch (error) {
    console.warn(
      '⚠️ Cannot read swagger doc file, generate a new one running yarn docs:generate.',
    );
  }
};
