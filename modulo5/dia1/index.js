/*A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. 
Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

O que não faz necessariamente muito sentido.

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
*/

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  alert('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
}