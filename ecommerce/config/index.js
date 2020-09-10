const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbHostUno: process.env.DB_HOST_UNO,
    dbHostDos: process.env.DB_HOST_DOS,
    dbHostTres: process.env.DB_HOST_TRES,
    dbName: process.env.DB_NAME,
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID,
    authAdminUser: process.env.AUTH_ADMIN_USERNAME,
    authAdminPass: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJwtSecret: process.env.AUTH_JWT_SECRET || 'mysecret'
}

module.exports = { config };