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

document.addEventListener('keydown', update); // evento de click

function update(event){
    //código do botão: 37-direita, 38-baixo, 39-esquerda, 40-cima
    if(event.keyCode == 37 && direction != "right") direction = "left"; // se o botão for 37 e a direção não for right a gente muda pra left
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    

    criarBG();
    criarCobrinha();

    //criar posição x e y para que a cobrinha saiba qual é o ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //criar as coordenadas para que ela saiba onde vai, se ela for para o lado 
    //direito ele adiciona um quadrado no lado direito, se for pro esquerdo, ele diminui um por exemplo

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeY -= box; //diminui pq é um plano carteziano então consequentemente ele diminui indo pra esquerda e aumenta indo pra direita
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;


    snake.pop(); //retira o ultimo elemento do array

    let newHead ={ //sempre vai ter que ter a cabeça
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // Está passando um intervalo de 100 millisegundos para que o jogo não trave
