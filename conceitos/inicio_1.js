var altura = 1.7;
var peso = 54;
var imc = peso / (altura * altura);
var resultado;

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

console.log(resultado);