var pessoa = {}
pessoa.nome = 'Rodrigo'
pessoa.idade = 29
pessoa.sexo = 'Masculino'
pessoa.casado = false

//delete pessoa.idade

if ('casado' in pessoa) {
    delete pessoa.casado
}

// for (propriedade in pessoa){
//     //console.log(propriedade)
//     console.log(pessoa[propriedade]);
// }

//console.log(pessoa.hasOwnProperty('casado'))
//console.log(pessoa);

// var i, size
// var propriedade = Object.keys(pessoa)
// console.log(propriedade);

// for(i = 0, size=propriedade.length; i < size; i++){
//     console.log(propriedade[i]);
//     console.log(pessoa[propriedade[i]]);
// }

console.log(pessoa.propertyIsEnumerable('idade'));

