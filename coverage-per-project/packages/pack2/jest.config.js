const packageJson = require('./package.json')

module.exports = {
  preset: '../../jest.preset.js',
  displayName: packageJson.name,
  rootDir: './'
}
