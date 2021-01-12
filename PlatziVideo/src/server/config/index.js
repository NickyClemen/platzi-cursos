const path = require('path');

const dotenv = require('dotenv');

const ENV_FILE = path.join(__dirname, '../../../.env');
dotenv.config({ path: ENV_FILE });

const config = {
    env: process.env.ENV,
    portDev: process.env.PORT_DEV,
    portProd: process.env.PORT_PROD,
};

module.exports = {
    config,
};
