import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;