function verificacheck(texto) {
    if (texto == "padrao") {
        document.getElementById("qtdepadrao").disabled = 
        !document.getElementById("qtdepadrao").disabled
    }
    if (texto == "kit") {
        document.getElementById("qtdekit").disabled = 
        !document.getElementById("qtdekit").disabled
    }
    if (texto == "suplemento") {
        document.getElementById("qtdesuplemento").disabled = 
        !document.getElementById("qtdesuplemento").disabled
    }
    if (texto == "arroz5") {
        document.getElementById("qtdearroz5").disabled =
        !document.getElementById("qtdearroz5").disabled
    }
    if (texto == "arroz1") {
        document.getElementById("qtdearroz1").disabled =
        !document.getElementById("qtdearroz1").disabled
    }
    if (texto == "feijao2") {
        document.getElementById("qtdefeijao2").disabled =
        !document.getElementById("qtdefeijao2").disabled
    }
    if (texto == "feijao1") {
        document.getElementById("qtdefeijao1").disabled =
        !document.getElementById("qtdefeijao1").disabled
    }
    if (texto == "macarrao") {
        document.getElementById("qtdemacarrao").disabled =
        !document.getElementById("qtdemacarrao").disabled
    }
    if (texto == "oleo") {
        document.getElementById("qtdeoleo").disabled =
        !document.getElementById("qtdeoleo").disabled
    }
    if (texto == "sangue") {
        document.getElementById("qtdesangue").disabled =
        !document.getElementById("qtdesangue").disabled
    }
}


function calcularAdicional() {
    let total = 0
    if (document.getElementById("padrao").checked){
        total = total + 50 * document.getElementById("qtdepadrao").value
    }
    if (document.getElementById("kit").checked){
        total = total + 25 * document.getElementById("qtdekit").value
    }
    if (document.getElementById("suplemento").checked){
        total = total + 10 * document.getElementById("qtdesuplemento").value
    }
    if (document.getElementById("arroz5").checked){
        total = total + 5 * document.getElementById("qtdearroz5").value
    }
    if (document.getElementById("arroz1").checked){
        total = total + 1 * document.getElementById("qtdearroz1").value
    }
    if (document.getElementById("feijao2").checked){
        total = total + 2 * document.getElementById("qtdefeijao2").value
    }
    if (document.getElementById("feijao1").checked){
        total = total + 1 * document.getElementById("qtdefeijao1").value
    }
    if (document.getElementById("macarrao").checked){
        total = total + 0.5 * document.getElementById("qtdemacarrao").value
    }
    if (document.getElementById("oleo").checked){
        total = total + 1 * document.getElementById("qtdeoleo").value
    }
    if (document.getElementById("sangue").checked){
        total = total + 15 * document.getElementById("qtdesangue").value
    }
    document.getElementById("result").innerHTML = total + " Pontos"
}

function ApareceBotao() {
    let resultado = document.getElementById("result");
    resultado.style.display = "flex";
}