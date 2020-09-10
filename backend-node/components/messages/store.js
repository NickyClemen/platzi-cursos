const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};

        if(filterUser !== null) {
            filter = { user: filterUser };
        }

        Model.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if(err) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            }); // Ejecuta populate. Recibe el error, y los datos populados.
    });
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id,
    });

    foundMessage.message = message;
    const newMessage = foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id,
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}