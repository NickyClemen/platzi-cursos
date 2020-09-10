const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
}); // Se definen las propiedades y los tipos.

const model = mongoose.model('Message', mySchema); /* Primer parámetro: El nombre de la collection en Mongo.
Segundo parámetro: Schema. */

module.exports = model;
