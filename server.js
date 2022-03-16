require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3030

const routes = require('./routes')

// forma de ler JSON /middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//rotas
app.use(routes)

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado a base de dados.')
        app.emit('bancoOn')
    })
    .catch(erro => console.log('Ops ocorreu um erro, código: ', erro))

app.on('bancoOn', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando em https://localhost:${port}`)
     })
})