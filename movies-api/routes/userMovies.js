const express = require('express');
const passport = require('passport');

const UserMoviesService = require('../services/userMovies');

const validationHadler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/user');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

require('../utils/auth/strategies/jwt');

function userMoviesAPI(app) {
    const router = express.Router();
    app.use('api/user-movies', router);

    const userMovieServices = new UserMoviesService();

    router.get('/',
      passport.authenticate('jwt', { session: false }),
      validationHadler({ userId: userIdSchema }, 'query'),
      scopesValidationHandler(['read:user-movies']),
      async (req, res, next) => {
        const { userId } = req.query;

        try {
            const userMovies = await userMovieServices.getUserMovies({ userId });

            res.status(200).json({
                data: userMovies,
                message: 'User movies listed.'
            });
        } catch(err) {
            next(err);
        }
    });

    router.post('/',
      passport.authenticate('jwt', { session: false }),
      validationHadler(createUserMovieSchema),
      scopesValidationHandler(['create:user-movies']),
      async (req, res, next) => {
        const { body: userMovie } = req;

        try {
            const createdUserMovieId = await userMovieServices.createUserMovie({ userMovie });

            res.status(201).json({
                data: createdUserMovieId,
                message: 'User movie created.'
            });
        } catch(err) {
            next(err);
        }
    });

    router.delete('/:userMovieId',
      passport.authenticate('jwt', { session: false }),
      validationHadler({ userMovieId: movieIdSchema }, 'params'),
      scopesValidationHandler(['delete:user-movies']),
      async (req, res, next) => {
        const { userMovieId } = req.params;

        try {
            const deletedUserMovieId = await userMovieServices.deleteUserMovie({ userMovieId });

            res.status(200).json({
                data: deletedUserMovieId,
                message: 'User movie deleted.'
            });

        } catch(err) {
            next(err);
        }
    });
}

module.exports = userMoviesAPI;