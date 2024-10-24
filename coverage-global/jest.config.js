const packageJson = require('./package.json')

module.exports = {
  projects: packageJson.workspaces.map((ws) => `<rootDir>/${ws}`),
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['jest.config.js', '/node_modules/'],
  collectCoverageFrom: [
    '**/*.{ts,js,cjs,mjs}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
}
