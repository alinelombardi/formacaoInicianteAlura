/* Hoje vamos desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.
Mas ele é 100% opcional.
Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/


//código para navegador

let nome = prompt('Qual o seu nome?')
let idade = prompt('Quantos anos você tem?')
let linguagem = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)


let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO?`);

if(resposta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso');
} else {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}


//código para VsCode - Node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome? ', (nome2) => {
    rl.question('Quantos anos você tem? ', (idade2) => {
        rl.question('Qual linguagem de programação você está estudando? ', (linguagem2) => {
            console.log(`Olá ${nome2}, você tem ${idade2} anos e já está aprendendo ${linguagem2}!`);
            rl.question('Você gosta de estudar ' + linguagem2 + '? Responda com o número 1 para SIM ou 2 para NÃO ', (resposta) => {
                if (resposta == 1) {
                    console.log('Muito bom! Continue estudando e você terá muito sucesso');
                } else {
                    console.log('Ahh que pena... Já tentou aprender outras linguagens?')
                }
                rl.close();
            });
        });
    });
})


