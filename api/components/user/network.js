const express = require('express');
const router = express.Router();

const secure = require('./secure');
const response = require('../../../network/response');
const controller = require('./index');

router.get('/', list);
router.post('/follow/:id', secure('follow'), follow);
router.get('/:id/following', following);
router.get('/:id', get);
router.post('/', post);
router.put('/', secure('update'), post);

function list(req, res, next) {
    controller.list()
        .then(list => response.success(req, res, list, 200))
        .catch(error => next);
}

function get(req, res, next) {
    controller.get(req.params.id)
        .then(user => response.success(req, res, user, 200))
        .catch(next);
}

function post(req, res, next) {
    controller.upsert(req.body)
        .then(user => response.success(req, res, user, 201))
        .catch(next);
}

function follow(req, res, next) {
    controller.follow(req.user.id, req.params.id)
        .then(data => response.success(req, res, data, 201))
        .catch(next);
}

function following(req, res, next) {
    controller.following(req.user.id, req.params.id)
        .then(data => response.success(req, res, data, 201))
        .catch(next);
}

module.exports = router;