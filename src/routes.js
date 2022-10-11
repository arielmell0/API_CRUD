const express = require('express')
const route = express.Router()

const HomeController = require('./Controller/HomeController')
const PessoaController = require('./Controller/PessoaController')

// Rota inicial (boas vindas)
route.get('/', HomeController.home)

// Rota pessoas
route.get('/pessoa', PessoaController.listaPessoas)
route.get('/pessoa/:id', PessoaController.listaUmaPessoa)
route.post('/pessoa', PessoaController.cadastroPessoa)
route.patch('/pessoa/:id', PessoaController.atualizaDadosPessoa)
route.delete('/pessoa/:id', PessoaController.deletaPessoa)

module.exports = route