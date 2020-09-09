/* Arquitectura basada en eventos
Eventos ayudan a manipular la asincronía de mejor manera.  */
const asyncCallback = function(cb) {
    setTimeout(() => {
        if(Math.random() < 0.5) {
            /* En Node, es común el concepto Erro First Callback. Se manda el error
            como primer parámetro. Si no hay error, se envía null, y otros parámetros. */
            return cb(null, 'Hello world');
        } else {
            cd(new Error('Hello error'));
        }
    }, 2000);
} // Callback es un parámetro que se va a ejecutar como una función.

asyncCallback((err, msg) => {
    if(err) {
        console.error('error', err);
    } else {
        console.log('message', msg);
    }
});