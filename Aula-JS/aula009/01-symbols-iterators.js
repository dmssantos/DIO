/* Symbols */
// const uniqueId = Symbol('Hello');
// const uniqueId2 = Symbol('Hello');

// console.log(uniqueId == uniqueId2);

// const uniqueId = Symbol('Hello');

// const obj = {
//     [uniqueId]: 'Hello'
// }

// console.log(obj);

/* Well konw symbols */

const uniqueId = Symbol('Hello');

Symbol.iterator
Symbol.split
Symbol.toStringTag

// const arr = [1, 2, 3, 4];
// // const it = arr[Symbol.iterator]();

// // while(true) {
// //     let { value, done} = it.next();

// //     if (done) {
// //         break;
// //     }

// //     console.log(value);
// // }

// for (let value of arr) {
//     console.log(value);
// }

// const str = 'Digital'
// for (value of str) {
//     console.log(value);
// }

const arr = [1, 2, 3, 4];
/* Deixando obj iteravel */
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

// const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (let value of obj) {
    console.log(value);
}