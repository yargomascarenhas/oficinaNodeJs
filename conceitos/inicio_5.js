var i = 0;
function calcula(pessoa) {
    setTimeout(function() {
        console.log(pessoa.nome + ' ' + imc(pessoa.altura, pessoa.peso));
    }, i);
    i += 2000;
}

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

var pessoas = [
    { nome: 'Rafael Marques', altura: 1.8, peso: 99 },
    { nome: 'Micaela Ferreira', altura: 1.7, peso: 67.5 },
    { nome: 'Joaquim Pessoa', altura: 1.6, peso: 44 }
];

for(var pessoa of pessoas) {
    calcula(pessoa);
}