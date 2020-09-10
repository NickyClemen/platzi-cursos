const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config({ path: `${ __dirname }/.env` });

const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
}

let connection;

function handleConnection() {
    connection = mysql.createConnection(dbConfig);

    connection.connect(err => {
        if(err) {
            console.error('[dbConnectErr]', err.message);
            setTimeout(handleConnection, 2000);
        }

        console.log('DB connected!');
    });

    connection.on('error', err => {
        console.error('[dbConnectErr]', err.message);

        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
}

handleConnection();

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${ table }`, (err, data) => {
            if(err) {
                reject(err);
            }

            resolve(data);
        });
    });
}

function get(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${ table } WHERE id=${ id }`, (err, data) => {
            if(err) {
                reject(err);
            }

            resolve(data);
        });
    });
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${ table } SET ?`, data, (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${ table } SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
}

function upsert(table, data) {
    return new Promise((resolve, reject) => {
        list(table)
            .then(users => {
                let isNew = true;
                users = JSON.parse(JSON.stringify(users));

                users.forEach(user => {
                    if(user.id === data.id) {
                        isNew = false;
                    }
                });

                if(isNew) {
                    resolve(insert(table, data));
                } else {
                    resolve(update(table, data));
                }
            })
            .catch(err => reject(err));
    });
}

function query(table, query, join) {
    let joinQuery = '';

    if(join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${ key } ON ${ table }.${ val } = ${ key }.id`;
    }
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${ table } ${ joinQuery } WHERE ${ table }.?`, query, (err, res) => {
            if(err) {
                reject(err);
            }

            resolve(res[0] || null);
        });
    });
}

module.exports = {
    list,
    get,
    upsert,
    query,
}