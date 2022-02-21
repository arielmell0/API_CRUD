const express = require('express')
const route = express.Router()

const HomeController = require('./src/Controller/HomeController')
const PessoaController = require('./src/Controller/PessoaController')

route.get('/', HomeController.home)

route.post('/pessoa', PessoaController.pessoa)

module.exports = route