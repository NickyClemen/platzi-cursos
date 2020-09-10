const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    const filterUsers = req.query.user || null;

    controller.getUsers(filterUsers)
        .then(userList => response.success(req, res, userList, 200))
        .catch(err => response.error(req, res, 'Internal Error', 500, err));
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => response.success(req , res, data, 201))
        .catch(err => response.error(req, res, 'Internal error.', 500, err));
});

module.exports = router;
