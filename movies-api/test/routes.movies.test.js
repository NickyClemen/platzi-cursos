const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, filteredMoviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function() {
        it('should respond with status 200.', function(done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should response with the list of movies.', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock,
                    message: 'Movies listed.'
                });

                done();
            });
        });
    });
});