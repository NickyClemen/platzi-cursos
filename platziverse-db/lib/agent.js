module.exports = function setupAgent(agentModel) {
    async function createOrUpdate(agent) {
        const cond = {
            where: {
                uuid: agent.uuid
            },
        };

        const existingAgent = await agentModel.findOne(cond);

        if(existingAgent) {
            const updated = await agentModel.update(agent, cond);
            return updated ? agentModel.findOne(cond) : existingAgent;
        }

        const result = await agentModel.create(agent);
        return result.toJSON();
    }

    function findById(id) {
        return agentModel.findById(id);
    }

    function findAll() {
        return agentModel.findAll();
    }

    function findByUuid(uuid) {
        return agentModel.findOne({
            where: {
                uuid: agent.uuid
            },
        });
    }

    function findConnected() {
        return agentModel.findAll({
            where: {
                connected: true,
            }
        });
    }

    function findByUsername(username) {
        return agentModel.findAll({
            where: {
                username,
                connected: true,
            }
        });
    }

    return {
        createOrUpdate,
        findById,
        findAll,
        findByUuid,
        findConnected,
        findByUsername,
    };
}