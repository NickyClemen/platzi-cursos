const { MongoClient, ObjectId } = require('mongodb');

const { config } = require('../config');
const debug = require('debug')('app:mongoLib');

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${ USER }:${ PASS }@${ config.dbHostUno }:${ config.dbPort },${ config.dbHostDos }:${ config.dbPort },${ config.dbHostTres }:${ config.dbPort }/${ DB_NAME }?ssl=true&replicaSet=atlas-9n3g8c-shard-0&authSource=admin&retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if(!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if(err) reject(err);

                    debug('DB connected!');

                    resolve(this.client.db(this.dbName));
                });
            });
        }

        return MongoLib.connection;
    }

    async getAll(collection, query) {
        return this.connect()
            .then(db => db.collection(collection).find(query).toArray());
    }

    async get(collection, id) {
        return this.connect()
            .then(db => db.collection(collection).findOne({ _id: ObjectId(id) }));
            // Retirna una instancia de base de datos.
    }

    async create(collection, data) {
        return this.connect()
            .then(db => db.collection(collection).insertOne(data))
            .then(result => result.insertedId);
    }

    async update(collection, id, data) {
        return this.connect()
            .then(db =>
                db
                    .collection(collection)
                    .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
            ).then(result => result.upsertedId || id);
    }

    async delete(collection, id) {
        return this.connect()
            .then(db => db.collection(collection).deleteOne({ _id: ObjectId(id) }, { $set: null }))
            .then(() => id);
    }
}

/* Read
    .find(query, projection)
    .findOne(query, projection)
    Projection: Datos que se quieren incluir.

Create
    .insertOne(document, options)

Update
    .updateOne(filter, update, options)

Delete
    .deleteOne(filter, options) */

module.exports = MongoLib;