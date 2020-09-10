const bcrypt = require('bcrypt');
const chalk = require('chalk');

const { config } = require('../../config');

const MongoLib = require('../../lib/mongo');

function buildAdminUser(password) {
    return {
        password,
        username: config.authAdminUser,
        email: config.authAdminEmail,
    };
}

async function hasAdminUser(mongoDB) {
    const adminUser = await mongoDB.getAll('users', {
        username: config.authAdminUser
    });

    return adminUser && adminUser.length;
}

async function createAdminUser(mongoDB) {
    const hashedPass = await bcrypt.hash(config.authAdminPass, 10);
    const userId = await mongoDB.create('users', buildAdminUser(hashedPass));
    return userId;
}

async function seedAdmin() {
    try {
        const mongoDB = new MongoLib();

        if(await hasAdminUser(mongoDB)) {
            console.log(chalk.yellow('Admin user already exists.'));
            return process.exit(1);
        }

        const adminUserId = await createAdminUser(mongoDB);
        console.log(chalk.green('Admin user created with id ', adminUserId));
        return process.exit(0);
    } catch(err) {
        console.log(err);
        console.log(chalk.red(err));
        process.exit(1);
    }
}

seedAdmin();