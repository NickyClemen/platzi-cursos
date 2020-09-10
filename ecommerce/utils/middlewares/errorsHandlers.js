const debug = require('debug')('app:error');
const boom = require('boom');
const Sentry = require("@sentry/node");
const { config } = require('../../config');

const isReqAjaxOrAPI = require('../../utils/isReqAjaxOrAPI');

Sentry.init({ dsn: `https://${ config.sentryDns }/${ config.sentryId }` });

function withErrorStack(err, stack) {
    if(config.dev) {
        return { ...err, stack }; // Object.assign({}, err, stack);
    }
}

function logErrors(err, req, res, next) {
    Sentry.captureException(err);
    debug(err.stack);
    next(err);
}

function wrapErrors(err, req, res, next) {
    if(!err.isBoom) {
        next(boom.badImplementation(err));
    }

    next(err);
}

function clientErrorHandler(err, req, res, next) {
    const { output: { statusCode, payload } } = err;

    if(isReqAjaxOrAPI(req) || res.headerSent) {
        res.status(statusCode).json(withErrorStack(payload, err.stack));
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    const { output: { statusCode, payload } } = err;

    if(!config.dev) {
        delete err.stack;
    }

    res.status(statusCode);
    res.render('error', withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    clientErrorHandler,
    errorHandler
}