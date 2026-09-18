function mudarTexto() {
    document.getElementByid
    ("titulo").textcontent = "você clicou no botão!";
}

function MudaCor() {
    document.getElementByid("mensagem").style.color = "blue";
}




function mostrarNome() {
    let nome = document.getElementByid("nome").value;

    document.getElementById("resultado").textContent = "olá," + nome + "!";
}