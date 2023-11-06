const database = require('../config/index')
const tabela = require('../models/ProjetoModels')
const PerfilTable = require('../models/perfilModels')

class ProjetoControllers {
    static async VerTodos(req, res) {
        await database.sync();
        let data = await tabela.findAll({ raw: true });
        let array = Object.keys(data)
        let registros = Object.values(data)
        for (let i = 0; i < array.length; i++) {
            console.log(registros[i])
        }
        res.status(200).json(registros)
    }

    static async verProjPerfil(req, res){
        await database.sync();
        const idPerfil = await PerfilTable.findAll({ where: { status: 1 } })
        const resultadoQuery = await tabela.findAll({where : {idPerfil : idPerfil[0].idPerfil }})
        res.status(200).json(resultadoQuery)
    }


    static async Adicionar(req, res) {
        await database.sync();
        const idPerfil = await PerfilTable.findAll({ where: { status: 1 } })
        const dados = {
            "nome": req.body.nome,
            "img": req.body.img,
            "link": req.body.link,
            "idPerfil" : idPerfil[0].idPerfil,
            "descricaoProj": req.body.descricaoProj
        }
        const resultadoCreate = await tabela.create(dados)
        res.send('foi')
    }
}

module.exports = ProjetoControllers;