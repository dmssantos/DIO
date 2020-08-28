// Função desacoplada
var getNome = function () {
    console.log(this.nome);
}

var pessoa = {
    nome: 'Rodrigo Rocha',
    idade: '29',
    /* Função acoplada
    getNome: function () {
        console.log(this.nome);
    */
    getNome: getNome
}

pessoa.getNome()

var carros = {
    nome: 'Gol',
    marca: 'VW',
    /* Função acoplada
    getNome: function () {
        console.log(this.nome);
    */
    getNome: getNome
}

carros.getNome()