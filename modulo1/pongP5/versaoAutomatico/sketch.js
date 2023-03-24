// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 15;
let raio = diametroBolinha / 2;

// variaveis da raquete 1
let xRaquete1 = 5;
let yRaquete1 = 150;

// variaveis da raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeY;
let velocidadeX;

// variaveis das raquetes
let comprimentoRaquetes = 10;
let alturaRaquete = 90;

// variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

// variaveis placar

let pontos = 0;
let pontosOponente = 0;

// sons do jogo
let raquete;
let ponto;

let chanceErro = 0;

function preload()
{
  raquete = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaDirecao();
  mostraRaquetes();
  movimentaRaquete();
  //verificaRaquete();
  verificaRaqueteBiblioteca(xRaquete1, yRaquete1);
  verificaRaqueteBiblioteca(xRaquete2, yRaquete2);
  movimentaRaqueteOponente();
  incluiPlacar();
  bolinhaPresa();
}


function mostraBolinha()
{
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentoBolinha()
{
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaDirecao()
{
  if (xBolinha + raio > width || xBolinha - raio <0)
  {
    velocidadeXBolinha *= -1
  }
  
  if (yBolinha +raio > height || yBolinha -raio <0)
  {
    velocidadeYBolinha *= -1
  }
}

function mostraRaquetes()
{
  rect(xRaquete1, yRaquete1, comprimentoRaquetes, alturaRaquete);
  rect(xRaquete2, yRaquete2, comprimentoRaquetes, alturaRaquete);
}

function movimentaRaquete()
{
  if (keyIsDown(UP_ARROW)) {
    yRaquete1 -= 10;
  }
  
    if (keyIsDown(DOWN_ARROW)) {
    yRaquete1 += 10;
  }
}



function verificaRaqueteBiblioteca(x, y)
{
 colidiu = collideRectCircle(x, y, comprimentoRaquetes, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquete.play();    
  }
}

function movimentaRaqueteOponente()
{
 velocidadeY = yBolinha - yRaquete2 - comprimentoRaquetes / 2 -30;
 yRaquete2 += velocidadeY + chanceErro;
  calculaErro();
}

function calculaErro()
{
if (pontosOponente >= pontos) {
    chanceErro += 1
    if (chanceErro >= 39){
    chanceErro = 40
    }
  } else {
    chanceErro -= 1
    if (chanceErro <= 35){
    chanceErro = 35
    }
  }
}

function bolinhaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function verificaRaqueteBiblioteca2()
{
 colidiu = collideRectCircle(xRaquete1, yRaquete1, comprimentoRaquetes, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

function verificaRaquete()
{
  if (xBolinha - raio < xRaquete1 + comprimentoRaquetes && yBolinha - raio < yRaquete1 + alturaRaquete && yBolinha + raio > yRaquete1) {
    velocidadeXBolinha *= -1;
    raquete.play();
  }
}

function incluiPlacar()
{
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140 ,0));
  rect(130, 10, 40, 20);
  fill(255);
  text(pontos, 150, 26);
  fill(color(255, 140, 0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosOponente, 450, 26);
  
  if(xBolinha > 590)
  {
    pontos +=1;
    ponto.play();
  }
    if(xBolinha <10)
  {
    pontosOponente +=1
    ponto.play();
  }
}
















