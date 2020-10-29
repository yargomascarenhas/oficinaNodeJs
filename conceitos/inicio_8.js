class Imc {
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
    calculaPessoaPeloNome(nome, funcaoBusca) {
        var pessoa = funcaoBusca(nome);
        var pessoa = funcaoBusca(nome);
        if(pessoa) {
            console.log(this.calcula(pessoa.altura, pessoa.peso));
        }
    }
    calculaPessoa(pessoa) {
        console.log(this.calcula(pessoa.altura, pessoa.peso));
    }
}

var encontraPessoa = function(nome) {
    return new Promise(function(resolve, reject) {
        for(var pessoa of pessoas) {
            if(pessoa.nome == nome) {
                resolve(pessoa);
            }
        }
        reject(false);
    });
}

var pessoas = [
    { nome: 'Rafael Marques', altura: 1.8, peso: 99 },
    { nome: 'Micaela Ferreira', altura: 1.7, peso: 67.5 },
    { nome: 'Joaquim Pessoa', altura: 1.6, peso: 44 }
];

encontraPessoa('Rafael Marques')
.then(function(pessoa) {
    var imc = new Imc();
    imc.calculaPessoa(pessoa);
})
.catch(function(err) {
    console.log('Não foi encontrado nenhuma pessoa com este nome');
});
