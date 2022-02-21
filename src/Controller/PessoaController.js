const Pessoa = require('../Models/PessoaModel')
const PessoaModel = require('../Models/PessoaModel')

// Create
exports.cadastroPessoa = async(req, res) => {
    const { nome, salario, aprovado } = req.body

    if(!nome) {
        res.status(422).json({ erro: "O nome é obrigatório!" })
    }

    const Pessoa = {
        nome,
        salario,
        aprovado
    }

    try {
        await PessoaModel.create(Pessoa)

        res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!'})
    } catch(error) {
        res.status(500).json( { erro: error } )
    }
}

// Read
exports.listaPessoas = async(req, res) => {
    try {
        const pessoa = await PessoaModel.find()

        res.status(200).json(pessoa)
    } catch(error) {
        res.status(500).json({ erro: error })
    }
}

exports.listaUmaPessoa = async(req, res) => {
    // extrair o dado da requisição pela url = req.params
    const id = req.params.id

    try {
        const pessoa = await PessoaModel.findOne({ _id: id })
        
        res.status(200).json(pessoa)
    } catch(error) {
        res.status(500).json({ erro: error})
    }
}