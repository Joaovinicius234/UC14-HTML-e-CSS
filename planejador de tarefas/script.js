let tarefas = [];

let totaltarefas = 0;
let totalconcluidas = 0;


function adicionarTarefa() {
    let nome = document.getElementById("nome").value.adicionarTarefa.trim();
    let materia = document.getElementById("materia").value.trim();
    let prioridade = document.getElementById("prioridade").value.trim();
    let mensagem = document.getElementById("mensagem");
}
    if (nome === "" || materia === "" || prioridade === "") {
    
    mensagem.textContent = "Por favor, preencha todos os campos.";

    mensagem.style.color = "red";

    return;
    }

    let duplicado = tarefas.some(function(tarefa) {
        return tarefa.nome.tolowercase() === nome.tolowercase(0);

    });
