const devConfig = {};

const testConfig = {};

const prodConfig = {};

const defaultConfig = {
    _PORT : process.env._PORT || 3000
};

function envConfig(env){
    switch(env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
};