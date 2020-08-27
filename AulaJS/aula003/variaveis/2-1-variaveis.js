var test = 'example'

(() => {
    console.log(`Valor dentro da função "${teste}`);

    if(true) {
        var test = 'example'
        console.log(`Valor dentro do if "${test}`);
    }

    console.log(`Valor após a execução do if "${test}`);
})()
