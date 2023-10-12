import { defineConfig, UserConfig } from 'vitest/config';

import { defaultVitestConfig } from './default';

export const CoverageVitestConfig: UserConfig = {
  ...defaultVitestConfig,
  test: {
    ...defaultVitestConfig.test,
    coverage: {
      exclude: [
        'docs',
        'src/config',
        'src/modules/**/infra',
        'src/shared/infra',
      ],
      reporter: ['lcov'],
    },
  },
};

export default defineConfig(CoverageVitestConfig);
