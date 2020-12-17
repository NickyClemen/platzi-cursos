const db = require('../');

async function run() {
    const config = {
        database: process.env.DB_NAME || 'platziverse',
        username: process.env.DB_USER || 'platzi',
        password: process.env.DB_PASS || 'platzi',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    };

    const { agent, metric } = await db(config).catch(handleFatalError);

    const agentCreated = await agent.createOrUpdate({
        uuid: 'yyy',
        name: 'test',
        username: 'test',
        hostname: 'test',
        pid: 1,
        connected: true,
    }).catch(handleFatalError);

    const agents = await agent.findAll().catch(handleFatalError);

    const metricCreated = await metric.create(agentCreated.uuid, {
        type: 'memory',
        value: '300',
    }).catch(handleFatalError);

    const metricAgentUuid = await metric.findByAgentUuid(agentCreated.uuid).catch(handleFatalError);
    const metricTypeUuid = await metric.findByTypeAgentUuid('memory', agentCreated.uuid).catch(handleFatalError);

    console.log(`--agentCreated--\n\t${ JSON.stringify(agentCreated) }`);
    console.log(`--agent--\n\t${ JSON.stringify(agents) }`);

    console.log(`--metricCreated--\n\t${ JSON.stringify(metricCreated) }`);
    console.log(`--metricAgentUuid--\n\t${ JSON.stringify(metricAgentUuid) }`);
    console.log(`--metricTypeUuid--\n\t${ JSON.stringify(metricTypeUuid) }`);
}

function handleFatalError(error) {
    console.error(error.message);
    console.error(error.stack);

    process.exit(1);
}

run();