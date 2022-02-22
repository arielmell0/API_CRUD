const Pessoa = require('../Models/PessoaModel')
const PessoaModel = require('../Models/PessoaModel')

// Create
exports.cadastroPessoa = async(req, res) => {
    const { nome, salario, aprovado } = req.body

    if(!nome) {
        res.status(422).json({ erro: "O nome é obrigatório!" })
        return
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

        if(!pessoa) {
            res.status(422).json({ message: 'O usuário não foi encontrado' })
            return
        }
        
        res.status(200).json(pessoa)
    } catch(error) {
        res.status(500).json({ erro: error })
    }
}

// Update - atualização de dados (PUT, PATCH)
exports.atualizaDadosPessoa = async(req, res) => {
    const id = req.params.id
    const { nome, salario, aprovado } = req.body

    const pessoa = {
        nome,
        salario,
        aprovado
    }

    try {
        const updatePessoa = await PessoaModel.updateOne({ _id: id }, pessoa)

        if(updatePessoa.matchedCount === 0) {
            res.status(422).json({ message: 'O usuário não foi encontrado!' })
            return
        }

        res.status(200).json({ message: 'Usuário alterado com sucesso.' })
    } catch(error) {
        res.status(500).json({ erro: error })
    }
}