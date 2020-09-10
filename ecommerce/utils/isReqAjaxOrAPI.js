function isReqAjaxOrAPI(req) {
    return !req.accepts('html') || req.xhr;
}

module.exports = isReqAjaxOrAPI;