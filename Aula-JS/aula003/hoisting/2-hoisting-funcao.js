function fn(){
    console.log(('hoisting de função'))

    function log(value) {
        console.log(value)
    }
}

fn()
/*
function fn(){
    function log(value) {
        console.log(value)
    }
    log('hoisting de função')
}
*/