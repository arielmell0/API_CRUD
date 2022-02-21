const PessoaModel = require('../Models/PessoaModel')

exports.pessoa = async(req, res) => {
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