module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['jest.config.js', '/node_modules/'],
  collectCoverageFrom: [
    '**/*.{ts,js,cjs,mjs}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
}
