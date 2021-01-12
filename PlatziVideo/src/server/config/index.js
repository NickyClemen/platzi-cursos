const path = require('path');

const dotenv = require('dotenv');

const ENV_FILE = path.join(__dirname, '../../../.env');
dotenv.config({ path: ENV_FILE });

const config = {
    env: process.env.ENV,
    portDev: process.env.PORT_DEV,
    portProd: process.env.PORT_PROD,
    apiUrl: process.env.API_URL,
    apiKeyToken: process.env.API_KEY_TOKEN,
};

module.exports = {
    config,
};
