module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['html', 'json'],
  collectCoverageFrom: [
    'src/middleware/*.ts',
    'src/object/*.ts',
    'src/service/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
};