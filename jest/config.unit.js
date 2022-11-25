module.exports = {
    rootDir: '..',
    roots: ['src'],
    testMatch: ['<rootDir>/**/*.test.ts'],
    setupFiles: [],
    testPathIgnorePatterns: ['dist'],
    modulePathIgnorePatterns: ['dist'],
    maxWorkers: '50%',
    testEnvironment: 'node',
    transform: {
      // '^.+\\.ts$': 'ts-jest',
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
    },
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  }
  