require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Banco de dados conectado.')
        app.emit('bancoOn')
    })
    .catch(erro => console.log('Ops ocorreu um erro, código: ', erro))

// forma de ler JSON /middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//rotas
app.use(routes)

module.exports = app