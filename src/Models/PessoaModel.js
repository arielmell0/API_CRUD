const mongoose = require('mongoose')

const Pessoa = mongoose.model('Pessoa', {
    nome: String,
    salario: Number,
    aprovado: Boolean
})

module.exports = Pessoa