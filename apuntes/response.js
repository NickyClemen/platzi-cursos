exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: '',
        message: message,
    }); // Ayuda a organizar el backend.
}

exports.error = (req, res, message, status, details) => {
    console.error('[response error]', details); // Guarda un trace.

    res.status(status || 500).send({
        error: message,
        message: '',
    });
}