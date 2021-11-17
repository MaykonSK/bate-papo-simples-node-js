const Sequelize = require('sequelize');
const conexao = require('./conexao');

const Mensagem = conexao.define('mensagens', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Mensagem.sync({force: false}).then(() => {
    console.log('Tabela criada')
})

module.exports = Mensagem;
