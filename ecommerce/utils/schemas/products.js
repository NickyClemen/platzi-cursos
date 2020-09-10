const joi = require('@hapi/joi');

const producIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTagSchema = joi.array().items(joi.string().max(10));

const createProductSchema = {
    name: joi.string().max(50).required(),
    price: joi.number().min(1).max(1000000),
    image: joi.string().required(),
    tags: productTagSchema,
}

const updateProductSchema = {
    name: joi.string().max(50),
    price: joi.number().min(1).max(1000000),
    image: joi.string(),
    tags: productTagSchema,
}

module.exports = {
    producIdSchema,
    productTagSchema,
    createProductSchema,
    updateProductSchema,
}