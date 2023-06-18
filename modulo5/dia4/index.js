/* Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/


alert('Bem vindo ao palpitometro, você tem 3 tentativas de acertar o número escolhida, digite números de 1 a 10')

let numeroEscolhido = Math.floor(Math.random() * (10 - 1 + 1) + 1)

let numeroDigitado = prompt('Digite o seu palpite ')

for (i = 1; i < 3; i++){
    if(numeroDigitado == 8){
        alert('Show, você acertou')
        break
    } else {
        numeroDigitado = prompt(`Você errou! Digite novamente o seu palpite, você já tentou ${i} vez`)
    }
}

if(i == 3) {
    alert(`O número escolhido era o ${numeroEscolhido}`)
}