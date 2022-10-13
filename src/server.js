require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./routes')

// forma de ler JSON /middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//rotas
app.use(routes)

module.exports = app