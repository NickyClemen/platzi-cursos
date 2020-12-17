const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

const agentFixtures = require('./fixtures/agent');

let config = {
    logging: () => {},
}

let single = Object.assign({}, agentFixtures.single);
let id = 1;
let uuid = 'yyy-yyy-yyy';
const uuidArgs = {
    where: {
        uuid,
    },
};

const connectedArgs = {
    where: { connected: true, },
};

const usernameArgs = {
    where: { username: 'platzi', connected: true, },
};

let newAgent = {
    uuid: '123-123-123',
    name: 'test',
    username: 'test',
    hostname: 'test',
    pid: 0,
    connected: false,
};

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

    agentStub.findOne = sandbox.stub();
    agentStub.findOne.withArgs(uuidArgs).returns(agentFixtures.byUuid(uuid));

    agentStub.findById = sandbox.stub();
    agentStub.findById.withArgs(id).returns(agentFixtures.findById(id));

    agentStub.findAll = sandbox.stub();
    agentStub.findAll.withArgs().returns(agentFixtures.all);
    agentStub.findAll.withArgs(connectedArgs).returns(agentFixtures.connected);
    agentStub.findAll.withArgs(usernameArgs).returns(agentFixtures.platzi);

    agentStub.create = sandbox.stub();
    agentStub.create.withArgs(newAgent).returns({
        toJSON() {
            return newAgent;
        }
    });

    agentStub.update = sandbox.stub();
    agentStub.update.withArgs(single, uuidArgs).returns(single);

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
    t.true(metricStub.belongsTo.called, 'metricStub.belongsTo was executed.');
    t.true(metricStub.belongsTo.calledWith(agentStub), 'argument should be the agent model.');
});

test.serial('agent#findById', async t => {
    let agent = await db.agent.findById(id);

    t.true(agentStub.findById.called, 'findById should be called on model.');
    t.true(agentStub.findById.calledOnce, 'findById should be called once.');
    t.true(agentStub.findById.calledWith(id), 'findById should be called with specified id.');

    t.deepEqual(agent, agentFixtures.findById(id), 'should by the same.');
});

test.serial('agent#findAll', async t => {
    let agents = await db.agent.findAll();

    t.true(agentStub.findAll.called, 'findAll should be called on model.');
    t.true(agentStub.findAll.calledOnce, 'findAll should be called once.');
    t.true(agentStub.findAll.calledWith(), 'findAll should be called without args');

    t.is(agents.length, agentFixtures.all.length, 'agents should be the same amount');
    t.deepEqual(agents, agentFixtures.all, 'agents should be the same');
});

test.serial('agent#createOrUpdate - exits', async t => {
    let agent = await db.agent.createOrUpdate(single);

    t.true(agentStub.findOne.called, 'findOne should be called on model.');
    t.true(agentStub.findOne.calledTwice, 'findOne should be called twice.');
    t.true(agentStub.update.calledOnce, 'update should be called with specified id.');

    t.deepEqual(agent, single, 'agent should be the same.');
});

test.serial('agent#createOrUpdate - new', async t => {
    let agent = await db.agent.createOrUpdate(newAgent);

    t.true(agentStub.findOne.called, 'findOne should be called on model.');
    t.true(agentStub.findOne.calledOnce, 'findOne should be called once.');
    t.true(agentStub.findOne.calledWith({ where: { uuid: newAgent.uuid } }), 'findOne should be called uuid args.');

    t.true(agentStub.create.called, 'create should be called on model.');
    t.true(agentStub.create.calledOnce, 'create should be called one.');
    t.true(agentStub.create.calledWith(newAgent), 'create should be called newAgent args.');

    t.deepEqual(agent, newAgent, 'agent should be the same.');
});

test.serial('agent#findConnected', async t => {
    let agents = await db.agent.findConnected();

    t.true(agentStub.findAll.called, 'findAll should be called on model.');
    t.true(agentStub.findAll.calledOnce, 'findAll should be called once.');
    t.true(agentStub.findAll.calledWith(connectedArgs), 'findAll should be called connectedArgs args.');

    t.is(agents.length, agentFixtures.connected.length, 'agents should be the same amount.');
    t.deepEqual(agents, agentFixtures.connected, 'agents should be the same.');
});

test.serial('Agent#findByUsername', async t => {
    let agents = await db.agent.findByUsername('platzi')

    t.true(agentStub.findAll.called, 'findAll should be called on model.');
    t.true(agentStub.findAll.calledOnce, 'findAll should be called once.');
    t.true(agentStub.findAll.calledWith(usernameArgs), 'findAll should be called with username args.');

    t.is(agents.length, agentFixtures.platzi.length, 'agents should be the same amount')
    t.deepEqual(agents, agentFixtures.platzi, 'agents should be the same')
});

/* Strub: Muy similar al objeto original (al modelo), pero que la respuesta y los argumentos
de entrada, estám implementados por una librería.
Fixtures: Set de datos de pruebas. */