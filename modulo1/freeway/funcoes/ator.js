//Informações Ator
let xAtor = 200;
let yAtor = 465;
let diametro = 20;
let colidiu = false;
let pontos = 0;

function mostraAtor()
{
  image(imgAtor, xAtor, yAtor, 40, 40);
}

function movimentoAtor()
{
   if (keyIsDown(UP_ARROW)) {
     yAtor -= 3;
   }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor < 465){
      yAtor +=3
    }    
  }  
}

function colisao()
{
  for(let i = 0; i < imagemCarros.length; i++)
    {
      colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimento, altura, xAtor, yAtor, diametro)
      if(colidiu)
        {
          volta();
          somColisao.play();
          if(pontos >0){
            pontos -=1;              
          }          
        }
    }
}

function volta(){
  yAtor = 465
}


function incluiPlacar()
{
  stroke(255);
  textAlign(CENTER);
  textSize(24);
  fill(color(255, 140 ,0));
  fill(255);
  text(pontos, 200, 30);
  
  if (yAtor < 40){
    pontos +=1;
    ponto.play();
    yAtor = 465
  }
  
  
  
}

