/* promises */
const doSomeThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve('Second data');
    }, 1000);
});

doSomeThingPromise.then(data => {
    console.log(data);
    return doOtherThingPromise;
}).then(data2 => console.log(data2)).catch();

/* status das promises */
// pending = executando
// fullfilled = executado
// Rejected = erro


/* callbacks */
// function doSomeThing(callback) {
//     setTimeout(function () {
//         // did someting
//         callback('First data');
//     }, 1000);
// }

// function doOtherThing(callback) {
//     setTimeout(function () {
//         // did someting
//         callback('Second data');
//     }, 1000);
// }

// function doAll() {
//     try {
//         doSomeThing(function (data) {
//             var processedData = data.split('');

//             try {
//                 doOtherThing(function (data2) {
//                     var processedData2 = data2.split('');

//                     try {
//                         setTimeout(function () {
//                             console.log(processedData, processedData2);
//                         }, 1000);
//                     } catch (err) {
//                         // handle error
//                     }
//                 });
//             } catch (err) {
//                 // handle error
//             }
//         });
//     } catch (err) {
//         // handle error
//     }
// }

// doAll();