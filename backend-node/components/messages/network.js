const path = require('path');

const multer = require('multer'); // Gestión de subida de archivos.
const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

const storage = multer.diskStorage({
    destination: 'public/file',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
});

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(err => response.error(req, res, 'Unexpected error', 500, err));
});

router.post('/', upload.single('file'), (req, res) => {
    controller.addMessages(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(err => response.error(req, res, 'Información inválida.', 400, err));
});

router.patch('/:id', (req, res) => {
    controller.updateMessages(req.params.id, req.body.message)
        .then(data => response.success(req, res, data, 200))
        .catch(err => response.error(req, res, 'Error interno.', 500, err));
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => response.success(req, res, `El usuario ${ req.params.id } ha sido eliminado.`, 200))
        .catch(err => response.error(req, res, 'Error interno.', err));
});

module.exports = router;