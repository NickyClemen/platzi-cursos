const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then(user => response.success(req, res, user, 200))
        .catch(err => response.error(req, res, 'Internal Error', 500, err));
});

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(data => response.success(req , res, data, 201))
        .catch(err => response.error(req, res, 'Internal error.', 500, err));
});

module.exports = router;
