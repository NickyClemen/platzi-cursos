const express = require('express');
const passport = require('passport');
const boom = require('boom');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { config } = require('../../config');

require('../../utils/auth/strategies/basic');

router.post('/token', (req, res, next) => {
    passport.authenticate('basic', (err, user) => {
        try {
            if(err || !user) {
                next(boom.unauthorized());
            }

            req.login(user, { session: false }, async err => {
                if(err) {
                    next(err);
                }

                const payload = { sub: user.username, email: user.email };
                const token = jwt.sign(payload, config.authJwtSecret, {
                    expiresIn: '15m'
                });

                return res.status(200).json({ access_token: token });
            });
        } catch(err) {
            next(err);
        }
    })(req, res, next);
});

module.exports = router;
