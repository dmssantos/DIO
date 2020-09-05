var pessoa = (function (nome, idade, sexo) {
    var nome = nome
    var idade = idade
    var sexo = sexo

    var getNome = function () {
        return nome
    }
    var getIdade = function () {
        return idade
    }
    var getSexo = function () {
        return sexo
    }

    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo
    }

    Object.freeze(metodos)

    return metodos
})

('Rodrigo', 28, 'M')
console.log(pessoa.getSexo());
