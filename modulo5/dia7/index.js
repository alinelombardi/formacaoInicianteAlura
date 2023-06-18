/* Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.
Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
*/



function adicao(num1, num2){
    return Number(num1) + Number(num2)
}

function divisao(num1, num2){
    return Number(num1) / Number(num2)
}

function multiplicacao(num1, num2){
    return Number(num1) * Number(num2)
}

function subtracao(num1, num2){
    return Number(num1) - Number(num2)
}

let num1, num2, operacao;

do {
    operacao = prompt('Qual operação deseja efetuar? Digite adição, subtração, divisão, multiplicação ou sair');
    while(operacao != 'sair' && operacao != 'adição' && operacao != 'subtração' && operacao != 'divisão' && operacao != 'multiplicação'){
        alert('Não entendi o que você digitou')
        operacao = prompt('Qual operação deseja efetuar? Digite adição, subtração, divisão, multiplicação ou sair')
    }

    if(operacao == 'sair'){        
        break
    }

    num1 = prompt('Digite o primeiro número: ')
    num2 = prompt('Digite o segundo número: ')

    switch (operacao) {
        case 'adição':
            alert(`O valor total da operação de ${operacao} entre o número ${num1} e número ${num2} é igual a ${adicao(num1, num2)}.`)
            break;
        case 'divisão':
            alert(`O valor total da operação de ${operacao} entre o número ${num1} e número ${num2} é igual a ${divisao(num1, num2)}.`)
            break;
        case 'subtração':
            alert(`O valor total da operação de ${operacao} entre o número ${num1} e número ${num2} é igual a ${subtracao(num1, num2)}.`)
            break;
        case 'multiplicação':
            alert(`O valor total da operação de ${operacao} entre o número ${num1} e número ${num2} é igual a ${multiplicacao(num1, num2)}.`)
            break;
    }
} while (operacao === 'adição' || operacao === 'subtração' || operacao === 'divisão' || operacao === 'multiplicação')

alert('Até a próxima')




