function Pessoa(nome, idade, sexo) {
    this._nome = nome
    this.idade = idade
    this.sexo = sexo

    Object.defineProperties(this, {
        _nome: {
            enumerable: true,
            configurable: true,
            writable: true
        },
        nome: {
            get: function () {
                return this._nome
            },
            set: function (value) {
                this._nome = value
            }
        }
    })
}

var rodrigo = new Pessoa ('Rodrigo', 29, 'M')
console.log(rodrigo);
console.log(rodrigo instanceof Pessoa);
console.log(rodrigo.constructor === Pessoa);

rodrigo.nome = 'José'
for (propriedade in rodrigo) {
    console.log(`${propriedade}: ${rodrigo[propriedade]}`);
}


