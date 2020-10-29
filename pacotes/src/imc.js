module.exports = class Imc {
    static processa(req, res) {
        var resultado = (new Imc()).calcula(req.query.altura, req.query.peso);
        res.status(200).send({ resultado: resultado });
    }
    calcula(altura, peso) {
        let imc = peso / (altura * altura);
        let resultado;

        if(imc < 18.5) {
            resultado = 'MAGREZA';
        } else if(imc >= 18.5 && imc <= 24.9) {
            resultado = 'NORMAL';
        } else if(imc >= 25 && imc <= 29.9) {
            resultado = 'SOBREPESO';
        } else if(imc >= 30 && imc <= 39.9) {
            resultado = 'OBESIDADE';
        } else if(imc > 39.9) {
            resultado = 'OBESIDADE GRAVE';
        }

        return resultado;
    }
}