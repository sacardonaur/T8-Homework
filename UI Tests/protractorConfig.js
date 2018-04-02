
// noinspection JSAnnotator
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    capabilities: {
        browserName: 'firefox'

    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/**/*.feature'],
    cucumberOpts: {
        require: ['features/**/step_definitions/**/env.js',
            'features/**/step_definitions/**/*Steps.js']
    },

    params: {
        env: {
            hostname: 'https://frontend-copy.herokuapp.com' // Whatever the address of your app is
        }
    }
};