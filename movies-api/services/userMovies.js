const MongoLib = require('../lib/mongo');

class UserMoviesService {
    constructor() {
        this.collection = 'user-movies';
        this.mongoLib = new MongoLib();
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoLib.getAll(this.collection, query);
        return userMovies || [];
    }

    async createUserMovie({ userMovieId }) {
        const createdUserMovieId = await this.mongoLib.create(this.collection, userMovieId);
        return createdUserMovieId;
    }

    async deleteUserMovie({ userMovieId }) {
        const deletedUserMovieId = await this.mongoLib.delete(this.collection, userMovieId);
        return deletedUserMovieId;
    }
}

module.exports = UserMoviesService;