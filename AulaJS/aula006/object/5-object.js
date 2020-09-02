var pessoa = {
    nome: 'Rodrigo',
    _idade: 29,
    _sexo: 'Masculino',
    casado: false,
    state: 'pristine',

    get idade() {
        this.state = 'dirty'
        return this._idade
    },
    set idade(value) {
        this._idade = value
    }
}

// pessoa.idade = 21
// console.log(pessoa.idade);

Object.defineProperty(pessoa, 'idade', {
    enumerable: false,
    configurable: false
})

Object.defineProperty(pessoa, 'nome', {
    enumerable: false, // Não aparece
    configurable: false, // Não pode ser removida
    writable: false // Não pode ser reescrita

})

for (property in pessoa) {
    console.log(property);
}

console.log('------------------------------------------------------------');

Object.defineProperty(pessoa, 'sexo', {
    get: function () {
        return this._sexo
    },
    set: function (value) {
        this._sexo = value
    }
})

pessoa.sexo = 'Feminino'
console.log(pessoa);