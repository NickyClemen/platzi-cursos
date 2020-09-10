const request = require('request');

function createRemoteDB(host, port) {
    const URL = `http://${ host }:${ port }`;

    function list(table) {
        return req('GET', table);
    }

    function get(table, id) {
        return req('GET', table, id);
    }

    function insert(table, data) {
        return req('POST', table, data);
    }

    function update(table, data) {
        return req('PUT', table, data);
    }

    function upsert(table, data) {
        if(data.id) {
            return update(table, data);
        }

        return insert(table, data);
    }

    function query(table, query, join) {
        return req('POST', `${ table }/query`, { query, join });
    }

    function req(method, table, data) {
        let url = `${ URL }/${ table }`;
        let body = '';

        if(method === 'GET' && data !== null) {
            url = `${ URL }/${ table }/${ data }`;
        } else if(method === 'POST' && data !== null) {
            url = `${ URL }/${ table }`;
            body = data;
        }

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json',
                },
                url,
                body
            }, (err, req, body) => {
                if(err) {
                    console.log('Error con la base de datos remota.');
                    reject(err.message);
                }

                const response = JSON.parse(body);
                resolve(response.body);
            })
        });
    }

    return {
        list,
        get,
        insert,
        upsert,
        query,
    }
}

module.exports = createRemoteDB;