const Utils = require('./utils');

const express = require('express');
const router = express.Router();

const utils = new Utils();

router.get('/:allowedResourceType', (req, res, next) => {
    const { allowedResourceType } = req.params;

    try {
        const result = utils.getKeys(allowedResourceType);

        if(result) {
            res.status(200).json(result);
        } else{
            res.status(400).send('No se han encontrado resultados.');
        }
    } catch(err) {
        next(err.message);
    }
});

router.get('/:allowedResourceType/:id', (req, res, next) => {
    const { allowedResourceType, id } = req.params;

    try {
        const result = utils.getKey(allowedResourceType, id);
        console.log(result);

        if(result) {
            res.status(200).json(result);
        } else{
            res.status(400).send('No se han encontrado resultados.');
        }
    } catch(err) {
        next(err.message);
    }
});

module.exports = router;