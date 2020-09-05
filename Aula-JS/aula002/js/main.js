function clicou() {
    console.log(document.getElementById("agradecimento").innerHTML = 'Obrigado por clicar')

    //alert("Obrigado por clicar")
}

function redirecionar() {
    //window.open("https://www.google.com.br")
    window.location.href = "https://www.google.com.br"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = 'Obrigado por passar o mouse'
    elemento.innerHTML = 'Obrigado por passar o mouse'
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = 'passe o mouse aqui'
    elemento.innerHTML = 'passe o mouse aqui'
}

function load() {
    alert("Página carregada")
}

function change(elemento) {
    console.log(elemento.value)
}


/*
function soma (n1, n2){
    return n1 + n2
}

var validar = 0 // global

function validaIdade(idade){
    var validar // local

    if (idade >= 18) {
        validar  = true
    } else {
        validar = false
    }

    return validar
}

var idade = prompt("Qual sua idade")
validaIdade(idade)
console.log(idade)

//alert(soma(5, 10))
*/