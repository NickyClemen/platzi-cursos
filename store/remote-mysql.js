const Remote = require('./remote');
const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const MYSQL_LOCALHOST = process.env.MYSQL_LOCALHOST;
const MYSQL_PORT = process.env.MYSQL_PORT;

module.exports = new Remote(MYSQL_LOCALHOST, MYSQL_PORT);