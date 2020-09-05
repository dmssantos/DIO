/*
// Criar um array
const arr = [1, 2, 3]
const arr2 = new Array(1, 2, 3)

// Array.of
const persons = Array.of('John', 'Cris', 'Jenny')

console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto')

console.log(numbersAndStrings);

// Array
const arr = Array(3)
// [empt x 3] 3 espaços vazios

const arr2 = Array(3, 2)
// [3, 2]

console.log(arr);

// Array.from
const divs = document.querySelectorAll('div')
const arr = Array.from(divs)

// push
const frutas = ['melancia', 'banana']
console.log(`Arrey: ${frutas}`);
console.log(`Itens no array depois do push: ${frutas.push('laranja')}`);
console.log(`Arrey depois do push: ${frutas}`);
// pop
console.log(`Item removido: ${frutas.pop()}`);
console.log(`Arrey depois do pop: ${frutas}`);
// unshift
console.log(`itens no array depois de unshift: ${frutas.unshift('laranja')}`)
console.log(`Arrey depois do unshift: ${frutas}`);
// shift
console.log(`Arrey depois do shift: ${frutas.shift()}`);
// concat
const salgados = ['coxinha', 'kibe', 'empada']
console.log(`Array salgados: ${salgados}`);

const alimentos = frutas.concat(salgados)
console.log(`Array frutas concatenado com array salgados: ${alimentos}`);
// slice
console.log(`Array depois do slice: ${alimentos.slice(0, 3)}`);
// splice
alimentos.splice(1, 0, 'acerola')
console.log(`Arrey depois do splice: ${alimentos}`);


// forEach

alimentos.forEach(alimentos => console.log(alimentos))
alimentos.forEach((fruta, index) => console.log(index, fruta))
console.log(' ');

// map
novoAlimento = alimentos.map((alimentos, index) => `${index} - ${alimentos}`)
console.log(alimentos);
console.log(novoAlimento);

// flat
const idades = [20, 34, [35, 60, [70, 40]]]
console.log(`Array idades: `, idades);
console.log(`Array idades com flat: `, idades.flat(2));
// flatMap
const arr = [1, 2, 3, 4]
arr.flatMap(value => [value * 2]) // [2, 4, 6, 8]
arr.flatMap(value => [[value * 2]]) // [[2], [4], [6], [8]]
// keys
const arrIterator1 = arr.keys()

arrIterator1.next() // {value: 0, done: false}
arrIterator1.next() // {value: 1, done: false}
arrIterator1.next() // {value: 2, done: false}
arrIterator1.next() // {value: 3, done: false}
// values
const arrIterator2 = arr.values()

arrIterator2.next() // {value: 1, done: false}
arrIterator2.next() // {value: 2, done: false}
arrIterator2.next() // {value: 3, done: false}
arrIterator2.next() // {value: 4, done: false}
// entries
const arrIterator3 = arr.entries()

arrIterator3.next() // {value: [0, 1], done: false}
arrIterator3.next() // {value: [1, 2], done: false}
arrIterator3.next() // {value: [2, 3], done: false}
arrIterator3.next() // {value: [3, 4], done: false}
// find
const firstGreatThanTwo = arr.find(value => value > 2)
console.log(firstGreatThanTwo);
// finsIndex
const firstGreatThanTwo2 = arr.findIndex(value => value > 2)
console.log(firstGreatThanTwo2);
// filter
const allValuesGreaterThanTwo = arr.filter(value => value > 2)
console.log(allValuesGreaterThanTwo);

// indexOf
const arr = [1, 3, 3, 4, 3]
const FirstIndexOfItem = arr.indexOf(3)
console.log(FirstIndexOfItem);
// lastIndexOf
const lastIndexOfItem = arr.lastIndexOf(3)
console.log(lastIndexOfItem);
// includes
const hasItemOne = arr.includes(1) // true
const hasItemTwo = arr.includes(2) // false
// some
const hasSomeEventNumber = arr.some(value => value % 2 === 0) // true
// every
const allEventNumber = arr.every(value => value % 2 === 0) // false
// sort
console.log(arr.sort());
// reverse
console.log(arr.reverse());
*/
// join
const arr = [1, 2, 3, 4, 5]
console.log(arr.join(' - '));
// reduce
arr.reverse((total, value) => total += value, 0) // 15

