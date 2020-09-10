const express = require('express');
const router = express.Router();

const response = require('../../../network/response');
const controller = require('./index');

router.post('/login', (req, res) => {
    controller.login(req.body.username, req.body.password)
        .then(token => response.success(req, res, token, 200))
        .catch(err => response.error(req, res, err.message, 400));
});

module.exports = router;