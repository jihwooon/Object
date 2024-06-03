/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules',
    '/dist',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  transform: {
    '^.+\\.ts?$': [
      '@swc/jest',
    ],
  },
  roots: [
    '<rootDir>/',
  ],
  testTimeout: 10000,
};
