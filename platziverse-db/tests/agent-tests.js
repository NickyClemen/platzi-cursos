const test = require('ava');

let config = {
    logging: () => {}
};

let db = null;

test.beforeEach(async () => {
    const setupDatabase = require('../');
    db = await setupDatabase(config);
});

test('agent', t => {
    t.truthy(db.agent, 'Agent service should exist.');
});

/* Strub: Muy similar al objeto original (al modelo), pero que la respuesta y los argumentos
de entrada, estám implementados por una librería. */