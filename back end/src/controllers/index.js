const database = require('../config/index')
const tabela = require('../models/index')
const tabelaPro = require('../models/projeto')

class projControllers {

    //ver informaçoes do perfil
    static async VerTodos(req, res){
        await database.sync();
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        for(let i = 0; i < array.length; i++){
            console.log(registros[i].nome)
        }
        res.status(200).json(registros)
    }

    static async Adicionar(req, res){
        await database.sync();
        const resultadoCreate = await tabelaPro.create(req.body)
        console.log(resultadoCreate);
        res.send('foi')
    }

    static async Atualizar(req, res){
        let id_pro = req.params.id
        await database.sync()
        const resultadoUpdate = await tabelaPro.update(req.body, {where: {id: id_pro} })
        console.log(resultadoUpdate)
        res.send('foi hehehehehe')
    }

    static async Cadastrar(req, res){
        await database.sync()
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        let new_dado = req.body
        let verificacao = true
        for(let i = 0; i < array.length; i++){
            if(new_dado.nome == registros[i].nome){
                verificacao = false
                console.log('nome ja usado')
            }
        }
        if(verificacao == true){
            const resultadoCreate = await tabela.create(req.body)
            console.log(resultadoCreate);
        }
        res.send('cadastrado')
    }

    static async Login(req, res){
        await database.sync();
        let data = await tabela.findAll({raw})
    }

    
}

module.exports = projControllers;