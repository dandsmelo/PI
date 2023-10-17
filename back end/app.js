const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const rotas = require('./src/routes/index')
const app = express();
app.use(cors());
app.use(express.json());

//localhost:5433/login/
app.use('/login', rotas)

const porta = 5433;

app.listen(porta, () => {
    console.log('servidor funcionando na porta: ', porta)
})
