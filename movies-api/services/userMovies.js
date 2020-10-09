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
        return await this.mongoLib.create(this.collection, userMovieId);
    }

    async deleteUserMovie({ userMovieId }) {
        return await this.mongoLib.delete(this.collection, userMovieId);
    }
}

module.exports = UserMoviesService;