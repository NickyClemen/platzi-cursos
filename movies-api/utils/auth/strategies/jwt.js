const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('boom');

const UserService = require('../../../services/users');
const { config } = require('../../../config');

passport.use(
    new Strategy({
        secretOrKey: config.authJwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function(tokenPayload, cb) {
        const userService = new UserService();

        try {
            const user = await userService.getUser({ email: tokenPayload.email });

            if(!user) {
                cb(boom.unauthorized(), false);
            }

            delete user.passport;

            cb(null, { ...user, scopes: tokenPayload.scopes });
        } catch(err) {
            return cb(err);
        }
    }
));