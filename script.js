let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o dezendo que vai acontecer dentro do canvas
let box = 32;
let snake = []; //snake é um array
snake[0] = { 
    x: 8 * box,
    y: 8 * box // esse é o tamanho inicial da cobra 
}

let pontos;


let direction = "right";
let food = {
    //para que a comida apareça aleatóriamente é necessário por numeros aleatorios
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


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


function drawFood(){
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
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

    //Lógica do plano cateziano, temos o ponto 0 de x e 0 de y , passando disso ele aumenta ou diminui
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0; 
    //se o valor de snake [0 que é sua cabeça] for maior que 15* o tamanho da box e ela estiver indo para a direita, automaticamente ela sai da box
    //e então ela recebe o valor de zero e aparece no lado de zero, na esqueda p direita dnv.
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    
    //criar posição x e y para que a cobrinha saiba qual é o ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //criar as coordenadas para que ela saiba onde vai, se ela for para o lado 
    //direito ele adiciona um quadrado no lado direito, se for pro esquerdo, ele diminui um por exemplo

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box; //diminui pq é um plano carteziano então consequentemente ele diminui indo pra esquerda e aumenta indo pra direita
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //caso a posiçao
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retira o ultimo elemento do array

    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    /*function contagem(){
        for(i = 0; i <= snake.length; i++);
        return pontos += 1;

    }*/

    let newHead ={ //sempre vai ter que ter a cabeça
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // Está passando um intervalo de 100 millisegundos para que o jogo não trave
