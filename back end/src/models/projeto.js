const database = require('../config/index');
const Sequelize = require('sequelize')


const ProjetoModels = database.define('projetos', {
    id: {
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    img : Sequelize.STRING(100)
});

database.sync();

module.exports = ProjetoModels