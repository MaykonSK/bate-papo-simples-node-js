const Sequelize = require('sequelize');

const conexao = new Sequelize('batepapo', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = conexao;