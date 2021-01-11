const { config } = require('./config/setup');

module.exports = {
    presets: ['next/babel'],
    plugins: [['transform-define', config]]
};