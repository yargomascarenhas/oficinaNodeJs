const http = require('http');
const imc = require('./imc');
const host = 'localhost';
const port = 8000;

const pontoDeEntrada = function (requisicao, resposta) {
    var url = requisicao.url;

    if(url.indexOf('/pessoa') === -1) {
        resposta.writeHead(400);
        resposta.end("Ponto de entrada inválido");
    }

    if(url.indexOf('/pessoa') !== -1) {
        var partparams = url.split('?');
        if(partparams[1]) {
            var params = partparams[1].split('&');
            var peso, altura;
            for(var param of params) {
                if(param.indexOf('peso') !== -1) {
                    var sep = param.split('=');
                    peso = sep[1];
                }
                if(param.indexOf('altura') !== -1) {
                    var sep = param.split('=');
                    altura = sep[1];
                }
            }
            console.log(peso, altura);

            resposta.writeHead(200);
            resposta.end((new imc.Imc()).calcula(altura, peso));
        }
    }

    resposta.writeHead(200);
    resposta.end("Meu servidor");
};

const server = http.createServer(pontoDeEntrada);
server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});