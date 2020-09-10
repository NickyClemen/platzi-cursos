const secure = require('./secure');

const express = require('express');
const router = express.Router();

const response = require('../../../network/response');
const controller = require('./index');

router.get('/', list);
router.get('/:id', get);
router.post('/', secure('new-post'), post);
router.put('/', secure('new-post'), post);

function list(req, res, next) {
    controller.list()
        .then(data => response.success(req, res, data, 200))
        .catch(next)
}

function get(req, res, next) {
    controller.get(req.params.id)
        .then(data => response.success(req, res, data, 200))
        .catch(err => next);
}

function post(req, res, next) {
    controller.upsert(req.body)
        .then(data => response.success(req, res, data, 201))
        .catch(next);
}

module.exports = router;