// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    defaultLanguage: 'ru',
    apiUrl: 'http://localhost:3000/api',
    webStoragePrefix: 'local',
    webStorageToken: 'token',
    identityServerUrl: 'http://localhost:3000/api',
    whitelistedDomains: [
        // временно разрешаем все возможные домены
        'localhost:3000' // expressjs mock api
    ]
};
