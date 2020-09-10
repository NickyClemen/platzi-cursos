// Lógica de almacenamineto. Mock (falsear datos) para simular intercambios.
const db = require('mongoose');

db.Promise = global.Promise; // Habilita las promesas en mongoose.

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true, // Evita problemas de compatibilidad.
        useUnifiedTopology: true,
    })
        .then(() => console.log('[db] Conectada con éxito.'))
        .catch(err => console.log(`[db error] ${ err.message }`));
}

module.exports = connect;


