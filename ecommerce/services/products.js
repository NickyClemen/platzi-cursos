const MongoLib = require('../lib/mongo');

class ProductsService {
    constructor() {
        this.collection = 'products';
        this.mongoDB = new MongoLib();
    }

    async getProducts({ tags }) {
        const query = tags && { tags: { $in: tags } };
        let products = await this.mongoDB.getAll(this.collection, query);

        return products || [];
    }

    async getProduct({ productId }) {
        let product = await this.mongoDB.get(this.collection, productId);

        return product || {};
    }

    async createProduct({ product }) {
        let createProduct = await this.mongoDB.create(this.collection, product);

        return createProduct;
    }

    async updateProduct({ productId, product }) {
        let updateProduct = await this.mongoDB.update(this.collection, productId, product);

        return updateProduct;
    }

    async deleteProduct({ productId }) {
        let deleteProduct = await this.mongoDB.delete(this.collection, productId);

        return deleteProduct;
    }
}

module.exports = ProductsService;