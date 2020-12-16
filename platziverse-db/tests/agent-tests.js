const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

let config = {
    logging: () => {}
}

let agentStub = null;
let metricStub = {
    belongsTo: sinon.spy(), // Función específica que permite obtener información de los tests.
};

let db = null;
let sandbox = null;

test.beforeEach(async () => {
    sandbox = sinon.createSandbox();

    agentStub = {
        hasMany: sandbox.spy(),
    };

    const setupDatabase = proxyquire('../', {
        './models/agent': () => agentStub,
        './models/metric': () => metricStub,
    });

    db = await setupDatabase(config);
});

test.afterEach(() => {
    sandbox && sandbox.restore();
});

test('agent', t => {
    t.truthy(db.agent, 'Agent service should exist.');
});

test.serial('setup', t => {
    t.true(agentStub.hasMany.called, 'agentModel.hasMany was executed.');
    t.true(agentStub.hasMany.calledWith(metricStub), 'argument should be the metric model.');
    t.true(metricStub.belongsTo.called, 'metricStub.belongsTo was executed.')
    t.true(metricStub.belongsTo.calledWith(agentStub), 'argument should be the agent model.')
});

/* Strub: Muy similar al objeto original (al modelo), pero que la respuesta y los argumentos
de entrada, estám implementados por una librería.
Fixtures: Set de datos de pruebas. */