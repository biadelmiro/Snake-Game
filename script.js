let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o dezendo que vai acontecer dentro do canvas
let box = 32;
let snake = []; //snake é um array
snake[0] = { 
    x: 8 * box,
    y: 8 * box // esse é o tamanho inicial da cobra 
}

let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";//estilo do canvas
    context.fillRect(0, 0, 16 * box, 16 * box);// desenha o quadrado onde acontece o jogo, 4 parâmetros posição de x e Y, altura e largura.
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"; //cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); //local onde ela está
    }
}

function iniciarJogo(){
    
}

criarBG();
criarCobrinha();