require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbHostUno: process.env.DB_HOST_UNO,
    dbHostDos: process.env.DB_HOST_DOS,
    dbHostTres: process.env.DB_HOST_TRES,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    defaultAdminPass: process.env.DEFAULT_ADMIN_PASSWORD,
    defaultUserPass: process.env.DEFAULT_USER_PASSWORD,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
}

module.exports = { config };