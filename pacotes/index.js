const express = require('express');
const bodyParser = require('body-parser')
const { Router } = require('express');

const Imc = require('./src/imc');
const Pessoa = require('./src/pessoa');
const routes = Router();

routes.get('/pessoa', Imc.processa);
routes.get('/pessoas', Pessoa.exibePessoas);;
routes.post('/pessoa', Pessoa.salva);
// routes.get('/home', (req, res) => {
//     res.status(200)
//     .send('<html><body style="background:#092;"><h1>Oficina de NodeJs</h1></body></html>');
// });
routes.get('/home', Pessoa.exibeTela);

// create the server and setup routes
const app = express();
app.use(bodyParser());
app.use(routes);

app.listen(8000, () => console.log('Servidor rodando em http://localhost:8000'));

// run the server locally
module.exports = app;