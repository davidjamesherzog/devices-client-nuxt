module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './server/tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'server',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s', '!**/*.e2e-spec.(t|j)s'],
  coverageDirectory: '../coverage-server',
  coverageThreshold: {
    global: {
      branches: 12,
      functions: 17,
      lines: 48,
      statements: 50
    }
  },
  testEnvironment: 'node'
};
