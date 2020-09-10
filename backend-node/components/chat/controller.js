const store = require('./store');

function addChat(users) {
    return new Promise((resolve, reject) => {
        if(!users || !Array.isArray(users)) {
            console.log('[ChatController] Error en el array de usuarios.');
            reject('Invalid user list.');
        }
    
        const chat = {
            users: users,
        }
    
        store.add(chat);
        resolve(chat);
    })
    
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}