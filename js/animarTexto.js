var texto = "Desenvolvedora\nFull-Stack";

var intervalo = 50;

var index = 0;

function animarTexto() {
   if (index < texto.length) {
      document.getElementById("texto-maquina").innerHTML += texto.charAt(index);
      index++;
      setTimeout(animarTexto, intervalo);
   }
}

window.onload = function () {
   animarTexto();
};
