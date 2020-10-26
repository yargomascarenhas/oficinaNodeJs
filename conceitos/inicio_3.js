function imc(altura, peso) {
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

var pessoas_altura = [1.8, 1.6, 1.7];
var pessoas_peso = [66, 88, 40];

for(var i = 0; i < pessoas_altura.length; i++) {
    let altura = pessoas_altura[i];
    let peso = pessoas_peso[i];

    console.log(imc(altura, peso));
}