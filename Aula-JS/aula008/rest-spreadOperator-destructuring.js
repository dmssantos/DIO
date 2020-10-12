// function sum(a, b) {
//     var value = 0;

//     for(var i=0; i< arguments.length; i++) {
//         value += arguments[i];
//     }

//     return value;
// }

// console.log(sum(5, 5, 5, 2, 3));

/* rest operator ...*/
// function sum(...args) {
//     return args.reduce((acc, value) => acc + value, 0);
// }
// console.log(sum(5, 5, 5, 2, 3));

/*spread operator*/
// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

// const sum = (...rest) => {
//     return multiply.apply(undefined, rest);
// }

// console.log(sum(5, 5, 5, 2, 3));

// const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

// const sum = (...rest) => {
//     return multiply(...rest);
// }

// console.log(sum(5, 5, 5, 2, 3));

// const str = 'Digital Innovation One';

// function logArgs(...args) {
//     console.log(args);
// }
// logArgs(...str)

// const arr = [1, 2, 3, 4];

// const arr2 = [...arr, 5, 6, 7];

// console.log(arr2);

// destructuring

// var arr = ['Apple', 'Banana', 'Orange'];

// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];

// var[apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

// console.log(apple, apple2);


// var obj = {
//     name: 'Celso',
//     props: {
//         age: 26,
//         favoriteColors: ['black', 'blue']
//     }
// }

// var {props: {age: age2, favoriteColors: [color1, color2]}} = obj

// console.log(name);

// var arr = [{name: 'Apple', type: 'fruit'}];
// var [{ name: fruitName }] = arr;

// console.log(fruitName);

function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum());
console.log(sum([5, 5]));
