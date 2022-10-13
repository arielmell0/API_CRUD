const app = require('./server.js')
const port = process.env.PORT || 3030
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Banco de dados conectado.')
        app.emit('bancoOn')
    })
    .catch(erro => console.log('Ops ocorreu um erro, código: ', erro))

app.on('bancoOn', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando em https://localhost:${port}`)
     })
})