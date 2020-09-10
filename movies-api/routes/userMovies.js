const express = require('express');

const UserMoviesService = require('../services/userMovies');

const validationHadler = require('../utils/middleware/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/user');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMoviesAPI(app) {
    const router = express.Router();
    app.use('api/user-movies', router);

    const userMovieServices = new UserMoviesService();

    router.get('/', validationHadler({ userId: userIdSchema }, 'query'), async (req, res, next) => {
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

    router.post('/', validationHadler(createUserMovieSchema), async (req, res, next) => {
        const { body: userMovie } = req;

        try {
            const createdUserMovieId = await userMovieServices.create({ userMovie });

            res.status(201).json({
                data: createdUserMovieId,
                message: 'User movie created.'
            });
        } catch(err) {
            next(err);
        }
    });

    router.delete('/:userMovieId', validationHadler({ userMovieId: movieIdSchema }, 'params'), async (req, res, next) => {
        const { userMovieId } = req.params;

        try {
            const deletedUserMovieId = await userMovieServices.delete({ userMovieId });

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