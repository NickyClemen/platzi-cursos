const Remote = require('./remote');
const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const CACHE_HOST = process.env.CACHE_HOST;
const CACHE_PORT = process.env.CACHE_PORT;

module.exports = new Remote(CACHE_HOST, CACHE_PORT);