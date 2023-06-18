/* Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de "você deseja adicionar uma comida na lista de compras"?
A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
Por fim, ele voltará para o ciclo inicial de perguntas.
Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: "Não foi possível encontrar o item dentro da lista!"
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
*/

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let remover = '';
let produto = '';
let comprarMais = 'sim';
let categoria = ''

alert('Vamos fazer a lista de compras da semana!')

while(comprarMais != 'não'){
    if(frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && naoPlanejado.length == 0){
        comprarMais = prompt('Deseja incluir um produto? Digite sim ou não')
    } else {
        comprarMais = prompt('Deseja incluir um produto? Digite sim ou não. Caso queira excluir, digite deletar')
    }

    while(comprarMais !="não" && comprarMais !="sim" && comprarMais !="deletar") {
        alert('Não entendi o que você digitou')
        comprarMais = prompt('Deseja incluir um produto? Digite sim ou não. Caso queira excluir, digite deletar')
    }

    if(comprarMais === 'não'){
        break
    }

    if(comprarMais === 'sim') {
        produto = prompt('Digite o produto: ')
        categoria = prompt('Qual categoria pertence? Digite 1 - frutas, 2 - laticínios, 3 - congelados e 4 - doces')
        if(categoria == 1){
            frutas.push(produto)
        } else if(categoria == 2){
            laticinios.push(produto)
        } else if(categoria == 3){
            congelados.push(produto)
        } else if(categoria == 4){
            doces.push(produto)
        } else {
            alert('Categoria inválida')
            categoria = prompt('Qual categoria pertence? Digite 1 - frutas, 2 - laticínios, 3 - congelados e 4 - doces')
        }
    } else if (comprarMais === 'deletar'){
        if(frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && naoPlanejado.length == 0){
            alert('Lista está vazia')
        } else {
            alert(`Lista de compras:\n frutas: ${frutas},\nlaticínios: ${laticinios},\ncongelados: ${congelados}\ndoces: ${doces}`)
            remover = prompt('Qual produto deseja remover?')
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
}

if(frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && naoPlanejado.length == 0) {
    alert('Volte sempre')
} else {
    alert(`Lista de compras:\nfrutas: ${frutas},\nlaticínios: ${laticinios},\ncongelados: ${congelados}\ndoces: ${doces}`)
}

