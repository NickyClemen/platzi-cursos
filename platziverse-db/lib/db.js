const Sequelize = require('sequelize');
let sequilize = null;

module.exports = function setupDatabase(config) {
    if(!sequilize) {
        sequelize = new Sequelize(config);
    }

    return sequelize;
}