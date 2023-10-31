const database = require('../config/index')
const tabela = require('../models/ProjetoModels')

class ProjetoControllers {
    static async VerTodos(req, res){
        await database.sync();
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        for(let i = 0; i < array.length; i++){
            console.log(registros[i])
        }
        res.status(200).json(registros)
    }


    static async Adicionar(req, res){
        await database.sync();
        const resultadoCreate = await tabela.create(req.body)
        console.log(resultadoCreate);
        res.send('foi')
    }
}

module.exports = ProjetoControllers;