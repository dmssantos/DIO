/*
switch (expressão) {
    case valor1:
        [break]
    case valorn:
        [break]

    default:
        [break]
}
*/

const fruit = 'mamão'

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / kg');
        break
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break
    default:
        console.log('Produto ão existe no estoque.');
}
