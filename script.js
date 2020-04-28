let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o dezendo que vai acontecer dentro do canvas
let box = 32;

function criarBG(){
    context.fillStyle = "lightgreen";//estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box);// desenha o quadrado onde acontece o jogo, 4 parâmetros posição de x e Y, altura e largura.
}

criarBG();