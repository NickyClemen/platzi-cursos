const express = require('express');
const passport = require('passport');

const ProductsService = require('../../services/products');
const validation = require('../../utils/middlewares/validationHandler');

const {
    producIdSchema,
    productTagSchema,
    createProductSchema,
    updateProductSchema
} = require('../../utils/schemas/products');

require('../../utils/auth/strategies/jwt');

const cacheResponse = require('../../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../../utils/time');

function productsAPI(app) {
    const router = express.Router();
    app.use('/api/products', router);

    const productsService = new ProductsService();

    router.get('/', async (req, res, next) => {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tags } = req.query;

        try {
            const products = await productsService.getProducts({ tags });

            res.status(200).json({
                data: products,
                message: 'Products listed.',
            });
        } catch(err) {
            next(err);
        }
    }); /* Se puede pasar middleware separados por coma, o en un array. */

    router.get('/:productId', async (req, res, next) => {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { productId } = req.params;

        try {
            const product = await productsService.getProduct({ productId });

            res.status(200).json({
                data: product,
                message: 'Products retrieved.',
            });
        } catch(err) {
            next(err);
        }
    });

    router.post('/', validation(createProductSchema), async (req, res, next) => {
        const { body: product } = req;

        try {
            const createProduct = await productsService.createProduct({ product });

            res.status(201).json({
                data: createProduct,
                message: 'Products created.',
            });
        } catch(err) {
            next(err);
        }
    });

    router.put('/:productId', passport.authenticate('jwt', { session: false }), validation({ productId: producIdSchema }, 'params'), validation(updateProductSchema), async (req, res, next) => {
        const { productId } = req.params;
        const { body: product } = req;

        try {
            const updateProduct = await productsService.updateProduct({ productId, product });

            res.status(200).json({
                data: updateProduct,
                message: 'Product updated.',
            });
        } catch(err) {
            next(err);
        }
    });

    router.delete('/:productId', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
        const { productId } = req.params;

        try {
            const deleteProduct = await productsService.deleteProduct({ productId });

            res.status(200).json({
                data: deleteProduct,
                message: 'Product deleted.',
            });
        } catch(err) {
            next(err);
        }
    });
}

module.exports = productsAPI;