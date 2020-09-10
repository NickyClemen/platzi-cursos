const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch(action) {
            case 'new-post': {
                auth.check.logged(req);
                next();
            }
                break;
            default:
                next();
                break;
        }
    }

    return middleware;
}