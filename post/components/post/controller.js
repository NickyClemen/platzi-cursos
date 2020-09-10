const nanoid = require('nanoid');

const TABLE = 'post';

module.exports = (injectedStore) => {
    let store = injectedStore;

    if(!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    function upsert(body) {
        if(!body) {
            return Promise.reject('[upsertController] No se han enviado datos.');
        }

        let newPost = {
            id: body.id ? body.id : nanoid.nanoid(),
            title: body.title,
            user: body.user,
        }

        return store.upsert(TABLE, newPost);
    }

    return {
        list,
        get,
        upsert,
        upsert,
    }
}