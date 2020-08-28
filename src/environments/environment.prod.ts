// @ts-ignore
const packageJson = require('../../package.json');

export const environment = {
  production: true,
  appName: 'Saipos DevKit',
  envName: 'PROD',
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version
  }
}
