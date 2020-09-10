const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = (req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;

    if(!status) {
        status = 200;
    }

    if(!message) {
        statusMessage = statusMessage[status];
    }

    res.status(statusCode).send({
        error: '',
        message: statusMessage,
    }); // Ayuda a organizar el backend.
}

exports.error = (req, res, message, status, details) => {
    console.error('[response error]', details); // Guarda un trace.

    res.status(status || 500).send({
        error: message,
        message: '',
    });
}