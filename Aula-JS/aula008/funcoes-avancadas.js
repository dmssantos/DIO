// função tradicional
// function log(value) {
//     console.log(value)
// }

// log('test')

// nome de função omitida ( função anonima)
// var log = function(value) {
//     console.log(value)
// }

// log('test')

// Arrow functions
// var sum  = (a, b) => a + b;
// console.log(sum(5, 5));
// ou
// var sum = (a, b) => {
//     if(a > b) {
//         return a * b;
//     }
//     return a + b;
// }

// console.log(sum(10, 7));

// retorno de objeto
// var createObj = () => ({test: 123});
// console.log(createObj())

// lazy evaluation
// function randomNumber() {
//     console.log('Generating a random number...');
//     return Math.random() * 10;
// }

// function multiply(a, b = randomNumber()) {
//     return a + b;
// }

// console.log(multiply(5));
// console.log(multiply(5));

//
// function method1() {
//     console.log('method called');
// }
// var obj = {
//     // method1: method1
//     method1
// }

// obj.method1();

// var obj = {
//     // sum: function sum(a, b) {
//     //     return a + b;
//     // }
//     sum(a, b) {
//         return a + b;
//     }
// }

// console.log(obj.sum(1, 5));

// var propName = 'test';

// var obj = {}

// obj[propName + 'concat'] = 'prop value';

// console.log(obj)

var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'
}

console.log(obj)