import path, { resolve } from 'path';

import { configDefaults, defineConfig, UserConfig } from 'vitest/config';

export const rootDir = path.resolve(__dirname, '..', '..');

export const defaultVitestConfig: UserConfig = {
  test: {
    exclude: [...configDefaults.exclude, '**.test.ts'],
    setupFiles: [
      'dotenv/config',
      'reflect-metadata',
      resolve(rootDir, 'config', 'vitest', 'setup.ts'),
    ],
    passWithNoTests: true,
    clearMocks: true,
    env: {
      NODE_ENV: 'automated_test',
    },
  },
  resolve: {
    alias: [
      {
        find: '@/tests',
        replacement: path.resolve(rootDir, 'tests'),
      },
      {
        find: '@',
        replacement: path.resolve(rootDir, 'src'),
      },
    ],
  },
};

export default defineConfig(defaultVitestConfig);
