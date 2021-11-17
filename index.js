const express = require('express');
const app = express();
const port = 80;

//ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const Mensagem = require('./database/Mensagem');

//conexao com mysql
const conexao = require('./database/conexao');
conexao.authenticate().then(() => {
    console.log('[ > ] Conexão com o banco de dados feita com sucesso.')
}).catch((error) => {
    console.log('[ X ] Conexao com o banco de dados falhou')
})

app.post('/salvarmensagem', (req, res) => {
    var nome = req.body.nome;
    var mensagem = req.body.mensagem;

    Mensagem.create({
        nome: nome,
        mensagem: mensagem
    }).then(() => {
        res.redirect('/')
    });
})

app.get('/', (req, res) => {
    Mensagem.findAll({raw: true, order: [
        ['id','DESC']
    ]}).then(mensagens => {
        res.render("index", {
            mensagens: mensagens, 
        });

    });
})



//iniciar servidor
app.listen(port, () => {
    console.log('Servidor rodando')
});