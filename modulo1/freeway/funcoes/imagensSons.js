let imgEstrada;
let imgAtor;
let imgCar1;
let imgCar2;
let imgCar3;
let imgCar4;
let imgCar5;
let imgCar6;
let som;
let somColisao;
let ponto;

function preload()
{
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator1.png");
  imgCar1 = loadImage("imagens/carro-1.png");
  imgCar2 = loadImage("imagens/carro-2.png");
  imgCar3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3];
  som = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  ponto = loadSound("sons/pontos.wav");
}