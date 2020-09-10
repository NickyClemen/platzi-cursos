const nanoid = require('nanoid');
const auth = require('../auth');

const TABLE = 'user';

module.exports = (injectedStore, injectedCache) => {
    let cache = injectedCache;
    let store = injectedStore;

    if(!store) {
        store = require('../../../store/mysql');
    }

    if(!cache) {
        cache = require('../../../store/dummy');
    }

    async function list() {
        let users = await cache.list(TABLE);

        if(!users) {
            users = await store.list(TABLE);
            cache.upsert(TABLE, users);
        }

        return users;
    }

    async function get(id) {
        let user = cache.get(table, id);

        if(!user) {
            user = await store.get(TABLE, id);
            cache.upsert(TABLE, user);
        }

        return user;
    }

    async function upsert(body) {
        if(!body) {
            return Promise.reject('[upsertController] No se han enviado datos.');
        }

        const user = {
            id: body.id ? body.id : nanoid.nanoid(),
            name: body.name,
            username: body.username,
        };

        if(body.password) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            });
        }

        return store.upsert(TABLE, user);
    }

    function follow(from, to) {
        return store.upsert(`${ TABLE }_follow`, {
            user_from: from,
            user_to: to,
        });
    }

    async function following(user) {
        const join = {};
        join[TABLE] = 'user_to';
        const query = { user_from: user };

        return await store.query(`${ TABLE }_follow`, query, join);
    }

    return {
        list,
        get,
        upsert,
        follow,
        following,
    };
}