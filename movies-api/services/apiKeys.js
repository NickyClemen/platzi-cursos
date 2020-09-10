const MongoLib = require('../lib/mongo');

class ApiKeysService {
    constructor() {
        this.collection = 'api-keys',
        this.mongoLib = new MongoLib();
    }

    async getApiKeys({ token }) {
        const [apiKey] = await this.mongoLib.getAll(this.collection, { token });
        return apiKey;
    }
}

module.exports = ApiKeysService;