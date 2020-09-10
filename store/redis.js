const redis = require('redis');

const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_PASS = process.env.REDIS_PASS;

const client = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASS
});

function list(table) {
    return new Promise((resolve, reject) => {
        client.get(table, (err, data) => {
            let res = data || null;

            if(err) {
                reject(err);
            }

            if(data) {
                res = JSON.parse(data);
            }

            resolve(res);
        });
    });
} // Se guarda el valor como un string largo. Se pasan los objetos a string para guardar, y viceversa para leer.

function get(table, id) {
    return list(`${ table }_${ id }`);
}

async function upsert(table, data) {
    let key = table;

    if(data && data.id) {
        key = `${ key }_${ data.id }`;
    }

    client.setex(key, 10, JSON.stringify(data));

    return true;
}

module.exports = {
    list,
    get,
    upsert
}