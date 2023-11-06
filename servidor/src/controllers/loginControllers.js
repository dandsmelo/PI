const database = require('../config/index')
const tabela = require('../models/usuarioModels')
const tabelaPerfil = require('../models/perfilModels')
const nodemailer = require('nodemailer');

class LoginControllers {

    static async Cadastrar(req, res) {
        await database.sync()
        let data = await tabela.findAll({ raw: true });
        let array = Object.keys(data)
        let registros = Object.values(data)
        let new_dado = req.body
        let verificacao = 1
        let email = req.body.email
        let padraoEmail = email.slice((email.length - 16), email.length);
        let raAluno = req.body.ra
        let raPadrao = raAluno.slice(0, 6)

        let num_Um = []
        for (let x = 0; x < 3; x++) {
            let numero = Math.floor(Math.random() * 10)
            num_Um.push(numero)
        }
        num_Um = num_Um.join("")

        let num_Dois = []
        for (let x = 0; x < 2; x++) {
            let numero = Math.floor(Math.random() * 10)
            num_Dois.push(numero)
        }
        num_Dois = num_Dois.join("")

        let numero = num_Dois + num_Um

        let transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: "thiago.santos254@fatec.sp.gov.br",
                pass: "White2023!"
            }
        });

        let mailOptions = {
            from: 'thiago.santos254@fatec.sp.gov.br',
            to: email,
            subject: 'verificação',
            html: `<h1>${numero}</h1>`
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('Email Esent!!!');
        });

        console.log(numero)
        if (raPadrao == "217139" && padraoEmail == "@fatec.sp.gov.br") {
            for (let i = 0; i < array.length; i++) {
                if (new_dado.nome == registros[i].nome) {
                    verificacao = 0
                    res.send('nome ja cadastrado')
                }
            }
            if (verificacao == 1) {
                let data = await tabela.findAll({
                    attributes: [
                        'idUsuario'
                    ]
                },)
                let indices = Object.keys(data)
                let dadosObj = Object.values(data)
                if (indices == 0) {
                    let idPerfilNovo = 0
                    let perfil = {
                        "Nome": "USER" + (idPerfilNovo + 1),
                        "Curso": "COLOQUE SEU CURSO AQUI",
                        "descricaoUsuario": "EU sou estudante, faço isso, isso e aquilo..",
                        "linkPort": "https://github.com/Thmsantos",
                        "status": 0,
                        "imgPerfil": "teste.png",
                        "imgCapa": "teste.png"
                    }
                    const resultadoCreate = await tabela.create(req.body)
                    const createPerfil = await tabelaPerfil.create(perfil)
                    res.send('foi')
                } else {
                    let idPerfilNovo = dadosObj[indices.length - 1].dataValues.idUsuario
                    let perfil = {
                        "Nome": "USER" + (idPerfilNovo + 1),
                        "Curso": "COLOQUE SEU CURSO AQUI",
                        "descricaoUsuario": "EU sou estudante, faço isso, isso e aquilo..",
                        "linkPort": "https://github.com/Thmsantos",
                        "status": 0,
                        "imgPerfil": "teste.png",
                        "imgCapa": "teste.png"
                    }
                    const resultadoCreate = await tabela.create(req.body)
                    const createPerfil = await tabelaPerfil.create(perfil)
                    res.status(200).json(5)
                }
            }
        } else {
            res.send("RA ou EMAIL INVALIDO")
        }
    }

    static async Login(req, res) {
        await database.sync();
        let data = await tabela.findAll({ raw: true });
        let array = Object.keys(data)
        let registros = Object.values(data)
        let verificacao = false
        for (let i = 0; i < array.length; i++) {
            if (req.body.senha == registros[i].senha && req.body.nome == registros[i].nome) {
                verificacao = true
            }
        }

        let dataPerfil = await tabelaPerfil.findAll({ raw: true })
        let arrayPerfil = Object.keys(dataPerfil)
        let registrosPerfil = Object.values(dataPerfil)

        for (let i = 0; i < arrayPerfil.length; i++) {
            if (registrosPerfil[i].status == 1) {
                const UpdateOffline = await tabelaPerfil.update({ status: 0 }, { where: { idPerfil: (i + 1) } })
            }
        }

        if (verificacao == true) {
            let idUser = await tabela.findAll({
                where: { nome: req.body.nome },
                attributes: [
                    'idUsuario',
                    'nome'
                ]
            })
            let dadosObj = Object.values(idUser)
            let idWhere = dadosObj[0].dataValues.idUsuario
            const UpdateStatus = await tabelaPerfil.update({ status: 1 }, { where: { idPerfil: idWhere } })
            res.status(200).json(5)
        } else {
            res.send('login invalido')
        }
    }
}

module.exports = LoginControllers;