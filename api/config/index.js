require('dotenv').config();

const config = {
    portApi: process.env.PORT_API,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
};

module.exports = { config };