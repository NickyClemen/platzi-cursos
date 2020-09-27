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
            res.status(400).send({ message: 'No se han encontrado resultados.' });
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
            res.status(400).send({ message: 'No se han encontrado resultados.' });
        }
    } catch(err) {
        next(err.message);
    }
});

router.post('/:allowedResourceType', (req, res, next) => {
    const { allowedResourceType } = req.params;
    const { body } = req;
    const entry = utils.setReqBody(body, allowedResourceType);

    try {
        const result = utils.setEntry(allowedResourceType, entry);

        if(result) {
            res.status(201).json({ message: 'Entrada ingresada con éxito.' });
        } else{
            res.status(400).send({ message: 'No se pudo incorporar la entrada.' });
        }
    } catch(err) {
        next(err.message);
    }
});

router.put('/:allowedResourceType/:id', (req, res, next) => {
    const { allowedResourceType, id } = req.params;
    const { body } = req;

    const entry = utils.setReqBody(body, allowedResourceType);

    try {
        const result = utils.updateKey(allowedResourceType, id, entry);

        if(typeof result === 'object') {
            res.status(200).json({ message: 'La entrada ha sido actualizada con éxito.' });
        } else if(typeof result === 'string') {
            res.status(200).json({ message: result });
        } else{
            res.status(400).send({ message: 'No se han encontrado resultados.' });
        }
    } catch(err) {
        next(err.message);
    }
});

router.delete('/:allowedResourceType/:id', (req, res, next) => {
    const { allowedResourceType, id } = req.params;

    try {
        const result = utils.deleteKey(allowedResourceType, id);

        if(typeof result === 'object') {
            res.status(200).json({ message: 'Entrada eliminada con éxito.' });
        } else if(typeof result === 'string') {
            res.status(200).json({ message: result });
        } else{
            res.status(400).send({ message: 'No se han encontrado resultados.' });
        }
    } catch(err) {
        next(err.message);
    }
});

module.exports = router;