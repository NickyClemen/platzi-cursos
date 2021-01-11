import path from 'path';

import dotenv from 'dotenv';

const ENV_FILE = path.join(__dirname, '../../../.env');
dotenv.config({ path: ENV_FILE });

export const config = {
    env: process.env.ENV,
    port: process.env.PORT,
};
