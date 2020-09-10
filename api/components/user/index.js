const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/../.env` });

const REMOTE_DB = process.env.REMOTE_DB || false;

let store, cache;

if(REMOTE_DB === true) {
    store = require('../../../store/remote-mysql');
    cache = require('../../../store/remote-redis');
} else {
    store = require('../../../store/mysql');
    cache = require('../../../store/redis');
}
const controller = require('./controller');

module.exports = controller(store, cache);