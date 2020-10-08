require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8000,
    apiUrl: process.env.API_URL,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
}

module.exports = { config };