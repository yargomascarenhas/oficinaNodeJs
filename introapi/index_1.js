const http = require('http');
const host = 'localhost';
const port = 8000;

const pontoDeEntrada = function (requisicao, resposta) {
    resposta.writeHead(200);
    resposta.end("My first server!");
};

const server = http.createServer(pontoDeEntrada);
server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});