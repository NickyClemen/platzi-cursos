const { response } = require('express');
const { config } = require('../config');

function cacheResponse(res, seconds) {
    if(!config.dev) {
        res.set('Cache-Control', `public, max-age=${seconds}`);
    }
} // El caché solamente va en las routes en las que se requieren recursos.

module.exports = cacheResponse;