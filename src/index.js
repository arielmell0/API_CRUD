const app = require('./server.js')
const port = process.env.PORT || 3030

app.on('bancoOn', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando em https://localhost:${port}`)
     })
})