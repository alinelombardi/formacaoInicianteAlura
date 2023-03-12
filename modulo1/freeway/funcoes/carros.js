// Informações carros

let yCarros = [55, 120, 187, 265, 330, 400];
let xCarros = [800, 800, 800, 800, 800, 800];
let velocidades = [6, 4,5, 3, 7, 8];
let comprimento = 60;
let altura = 50;

function mostraCarro()
{
  for (let i = 0; i < imagemCarros.length; i++)
  {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);
  }
}

function movimentoCarro()
{
  for(let i = 0; i < xCarros.length; i++)
    {
        xCarros[i] -= velocidades[i];      
    }
}

function retornaposicao()
{
  for(let i = 0; i < xCarros.length; i++)
    {
      if(passou(xCarros[i]))
      {
        xCarros[i] = 800;        
      }
    }
}

function passou(xCarro)
{
  return xCarro < -60;
}





