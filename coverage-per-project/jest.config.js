const packageJson = require('./package.json')

module.exports = {
  projects: packageJson.workspaces.map((ws) => `<rootDir>/${ws}`),
}
