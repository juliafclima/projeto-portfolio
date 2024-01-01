const imagensTroca = document.querySelectorAll(".imagemTroca"); // Seleciona todas as imagens com a classe "imagemTroca"
const linkNovaImagem = "../images/repositoriobranco.png";

function trocarImagem(event) {
  event.target.src = linkNovaImagem; // Troca a src da imagem em que o mouse passou por cima
}

function restaurarImagem(event) {
  event.target.src = "../images/iconinternet.png"; // Restaura a src da imagem em que o mouse saiu
}

imagensTroca.forEach((imagem) => {
  imagem.addEventListener("mouseover", trocarImagem);
  imagem.addEventListener("mouseout", restaurarImagem);
});
