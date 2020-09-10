const Model = require('./model');

async function getUser(filterUser) {
    let filter = {};

    if(filterUser !== null) {
        filter = { name: filterUser } 
    }

    const listUser = await Model.find(filter);
    return listUser;
}

function addUser(user) {
    const myUser  = new Model(user);
    return myUser.save();
}

module.exports = {
    add: addUser,
    get: getUser,
}