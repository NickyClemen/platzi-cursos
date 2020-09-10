require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    db: process.env.DB_MONGO || `mongodb://${ process.env.DB_USER }:${ process.env.DB_PASS }@cluster0-shard-00-00.b965e.mongodb.net:27017,cluster0-shard-00-01.b965e.mongodb.net:27017,cluster0-shard-00-02.b965e.mongodb.net:27017/${ process.env.DB_NAME }?ssl=true&replicaSet=atlas-9n3g8c-shard-0&authSource=admin&retryWrites=true&w=majority`,
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
}