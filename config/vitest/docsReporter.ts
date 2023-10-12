import { resolve } from 'path';

import { defineConfig } from 'vitest/config';

import { defaultVitestConfig, rootDir } from './default';

export default defineConfig({
  ...defaultVitestConfig,
  test: {
    ...defaultVitestConfig.test,
    reporters: [resolve(rootDir, 'docs', 'reporter', 'index.ts')],
    outputFile: resolve(rootDir, 'docs', 'swagger.yaml'),
    env: {
      ...defaultVitestConfig.test?.env,
      GENERATE_OPENAPI_DOCS: 'true',
    },
    watch: false,
    silent: true,
  },
});
