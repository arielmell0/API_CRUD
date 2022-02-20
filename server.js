const express = require('express')
const app = express()
const port = 3030

const routes = require('./routes')

// forma de ler JSON /middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(routes)

app.listen(port, () => {
   console.log(`Servidor rodando em https://localhost:${port}`)
})