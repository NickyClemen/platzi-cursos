const defaults = require('defaults');

const setupDatabase = require('./lib/db');
const setupAgentModel = require('./models/agent');
const setupMetricModel = require('./models/metric');

const setupAgent = require('./lib/agent');
const setupMetric = require('./lib/metric');

module.exports = async (config) => {
    config = defaults(config, {
        dialect: 'sqlite',
        pool: {
            max: 10,
            min: 0,
            idle: 10000,
        }, // Crea un pool de conexiones.
        query: {
            raw: true,
        }
    });

    const sequelize = setupDatabase(config);
    const agentModel = setupAgentModel(config);
    const metricModel = setupMetricModel(config);

    agentModel.hasMany(metricModel);
    metricModel.belongsTo(agentModel);

    await sequelize.authenticate();

    if(config.setup) {
        await sequelize.sync({ force: true }); // Crea una tabla si no existe.
    }

    const agent = setupAgent(agentModel);
    const metric = setupMetric(metricModel, agentModel);

    return {
        agent,
        metric,
    };
}