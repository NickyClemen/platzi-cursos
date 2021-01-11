require('dotenv').config();

const config = {
    port: process.env.PORT_BLOG,
    spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
};

module.exports = { config };