
function consultaCep() {

    $(".barra-progresso").show();

    let cep = document.getElementById("cep").value
    let url = "https://viacep.com.br/ws/" + cep +"/json/"
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP " + response.cep);
            $(".barra-progresso").hide();
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})