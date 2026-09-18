let numero = 10;

function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent =
        "Você escolheu viajar para " + cidade + "! ✈️";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "25px";
}

function aumentar() {
    numero++;

    document.getElementById("contador").textContent = numero;
}

function diminuir() {
    numero--;

    document.getElementById("contador").textContent = numero;
}

document.getElementById("botaoCidade").onclick = mostrarCidade;

document.getElementById("botaoDestaque").onclick = destacarMensagem;

document.getElementById("mais").onclick = aumentar;

document.getElementById("menos").onclick = diminuir;