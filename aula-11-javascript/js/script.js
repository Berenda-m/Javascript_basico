function alterarTitulo() {
    document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
}
function mostrarMensagem() {
    alert("Você clicou no botão!");
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}
function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado1").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultado1").innerText = "Você é menor de idade.";
    }
}
function trocarImagem() {
    let imagem = document.getElementById("imagem");
    if (imagem.src.includes("img/59143.jpeg")) {
        imagem.src = "img/imagem2.jpg";
    } else {
        imagem.src = "img/59143.jpeg";
    }
}



function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}
function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}

function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}

function removerAviso() {
    document.getElementById("aviso").remove()

}







