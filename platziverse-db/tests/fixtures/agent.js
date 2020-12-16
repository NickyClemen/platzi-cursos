const agent = {
    id: 1,
    uuid: 'yyy-yyy-yyy',
    name: 'fixture',
    username: 'platzi',
    hostname: 'test-host',
    pid: 0,
    connected: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

function extend(obj, values) {
    const clone = Object.assign({}, obj);
    return Object.assign(clone, values);
}

const agents = [
    agent,
    extend(agent, { id: 2, uuid: 'yyy-yyy-yyy', connected: false, username: }),
];

module.exports = {
    single: agent,
};