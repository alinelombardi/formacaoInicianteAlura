/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.
Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
*/

let area = prompt('Você deseja seguir em qual área? Digite Frontend ou Backend')

if(area == 'Frontend'){
    alert(`Certo você escolheu ${area}`)
    linguagem = prompt(`E qual linguagem quer aprender de ${area}, digite React ou Vue`)
} else if (area == 2) {
    alert(`Certo você escolheu ${area}`)
    linguagem = prompt(`Você quer aprender qual linguagemde ${area}? Digite C# ou Java`)
} else {
    console.log('Não entendi o que digitou')

}


let especializacao = prompt('E você vai se especializar ou quer ser fullstack?, Digite 1 para especializar e 2 para fullstack')
if(especializacao == 1){
    alert(`Legal, vou torcer por ti para ser o melhor especialista em ${area} e ${linguagem}`)
} else if(especializacao == 2) {
    alert('Arrasou, vai dominar tudo')
} else {
    alert('Não entendi o que digitou')
}

querDigitar = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')

while (querDigitar != "Não"){
    linguagem2 = prompt('E qual vai ser?')
    alert(`Nossa, vai ser legal aprender ${linguagem2}`)
    querDigitar = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')
}