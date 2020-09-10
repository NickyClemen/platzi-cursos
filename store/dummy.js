const db = {
    'user': [
        {
            id: '1',
            name: 'Nicole',
        }
    ]
}

async function list(table) {
    return db[table] || [];
}

async function get(table, id) {
    let collection = await list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data) {
    if(!db[table]) {
        db[table] = [];
    }

    db[table].push(data);
    return data;
}

async function query(table, q) {
    let collection = await list(table);
    let keys = Object.keys(q);

    return collection.filter(item => item[keys[0]] === q[keys[0]])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    query,
};