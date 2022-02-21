const express = require('express')
const route = express.Router()

const HomeController = require('./src/Controller/HomeController')
const PessoaController = require('./src/Controller/PessoaController')

// Rota inicial (boas vindas)
route.get('/', HomeController.home)

route.get('/pessoa', PessoaController.listaPessoas)
route.get('/pessoa/:id', PessoaController.listaUmaPessoa)

route.post('/pessoa', PessoaController.cadastroPessoa)

module.exports = route