const express = require('express');

const projControllers = require('../controllers/index');

const router = express.Router();

router
    .get('/ver', projControllers.VerTodos)
    .post('/adc', projControllers.Adicionar)
    .put('/att/:id', projControllers.Atualizar)
    .post('/cad', projControllers.Cadastrar)

module.exports = router