import { configDefaults, defineConfig } from 'vitest/config';

import { defaultVitestConfig } from './default';

export default defineConfig({
  ...defaultVitestConfig,
  test: {
    ...defaultVitestConfig.test,
    exclude: configDefaults.exclude,
    setupFiles: ['dotenv/config', 'reflect-metadata'],
  },
});
