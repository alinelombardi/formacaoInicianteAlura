function setup() {
  som.loop();
  createCanvas(800, 505);
  
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentoAtor();
  retornaposicao();
  colisao();
  incluiPlacar()
  
}



