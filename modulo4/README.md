# 🗂️ Módulo 4 - Ganhar experiência com JavaScript e conhecer o Git

### 🛠️ Plataformas utilizadas

</br>

- **Visual Studio Code:** Em 2015 foi lançado pela Microsoft um editor de código destinado ao desenvolvimento de aplicações web chamado de Visual Studio Code, ou simplesmente VSCode. Anunciada durante o Build, evento voltado a desenvolvedores que ocorre nos Estados Unidos anualmente, trata-se de uma ferramenta leve e multiplataforma que está disponível tanto para Windows, quanto para Mac OS e Linux e atende a uma gama enorme de projetos, não apenas ASP.NET, como também Node.js. Adicionalmente, o editor possui suporte à sintaxe de diversas linguagens como Python, Ruby, C++. Além de ser totalmente gratuito, é open source.

- **Git:** É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo (Exemplo: alguns livros digitais são disponibilizados no GitHub e escrito aos poucos publicamente). O Git foi inicialmente projetado e desenvolvido por Linus Torvalds para o desenvolvimento do kernel Linux, mas foi adotado por muitos outros projetos.

- **Github:** é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. GitHub é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto, além de promover fácil comunicação através de recursos que relatam problemas ou misturam repositórios remotos (issues, pull request).

- **Google chrome:** O Google Chrome é um navegador de internet desenvolvido pela Google. Foi lançado pela primeira vez no dia 2 de setembro de 2008, para o Microsoft Windows, e mais tarde foi portado para Linux, Mac, iOS e Android. Compilado com base em componentes de código licenciado como o motor de renderização WebKit. O Google Chrome também é o principal componente do Chrome OS onde funciona como uma plataforma para executar aplicativos da web e sua estrutura de desenvolvimento de aplicações (framework).

---

</br>

### ⚙️ JavaScript para Web: Crie páginas dinâmicas

</br>

> Assuntos abordados: 

Clicando no botão: 
- A tag audio do HTML e como ela funciona;
- Como adicionar código JavaScript inline a partir do atributo onclick na tag button;
- Como é a função alert() do JavaScript.

Conectar JS com HTML: 
- Porque devemos ter arquivos dedicados para cada linguagem; 
- A extensão .js para arquivos com JavaScript; 
- Inclusão do arquivo principal de JavaScript, o main.js; 
- Como inserir um arquivo .js dentro de uma página HTML com a tag script.

Buscar um elemento: 
- Tipos de seletores que podemos usar no JavaScript (elemento, classe e id);
- Como utilizar a função querySelector para selecionar os elementos da nossa página HTML; 
- Referência document, que representa o documento HTML dentro do JavaScript;
- Uso do operador ponto final para entrar dentro de referências como o document; 
- O que significa o Reference Error e como solucionar;
- Entender que o JavaScript é uma linguagem case sensitive e que o ponto e vírgula é opcional, porém recomendado.

Play no JS:
- Como manipular a tag <audio> do HTML através do JavaScript;
- Como selecionar um elemento a partir de um seletor de id e a reproduzir um som a partir da função play(). 
- Como os erros são apresentados na aba Console da ferramenta DevTools.

O que é uma função:
- O que é uma função, para que servem, como declará-la e sua sintaxe básica; 
- Ordem de execução de um código JavaScript importa, desde a inserção da tag script antes do fechamento da tag </body> no HTML até a ordem do código JavaScript dentro do seu próprio arquivo.

Clique no botão:
- Utilizar o onclick como atributo no JavaScript;
- Como atribuir uma função ao onclick sem que esta função seja invocada imediatamente.

Lista de elementos:
- O que são os comentários de código e como utilizá-los para auxiliar durante a escrita da nossa aplicação;
- Alternativa ao querySelector quando necessário buscar muitos elementos, que é o querySelectorAll, que retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

Referências:
- Para que serve uma referência;
- Como declaramos uma referência de valor constante no código.

Conhecendo listas:
- A estrutura de uma lista em JavaScript;
- Como acessar os elementos a partir dos índices com a sintaxe dos colchetes.

Percorrendo uma lista:
- Como percorrer uma lista usando a estrutura de repetição while;
- Criar referências variáveis com let;
- Incrementar o valor de uma variável;
- Criar uma condição para evitar o loop infinito;
- Atributo length contido nas listas para obter dinamicamente o valor do tamanho de uma lista.

Função com parâmetros:
- Como declarar e utilizar parâmetros dentro de uma função;
- Oque é uma função anônima e o retorno undefined de uma função.

Textos dinâmicos:
- Como criar textos dinâmicos utilizando template string;
- Como acessar as classes de um elemento através do atributo classList.

Repetição otimizada com For:
- Como é a estrutura de repetição for.

Eventos no teclado:
- O que são eventos do teclado e como usá-los: onkeydowne onkeyup; 
- Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

Condições no código e operadores lógicos:
- O que é o objeto event, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento; 
- Estrutura condicional if e para que ele serve, operador de igualdade ==, estritamente igual (===), e o operador or (||).

Mais condições:
- Estruturas condicionais if e else juntas;
- Operador not equals (!=), operador lógico and (&&) e o valor null.

---

</br>

### ⚙️ Git e GitHub: repositório, commit e versões

</br>

> Assuntos abordados: 

- Conhecer o Github, criar uma conta e entender para o que ele serve;
- Criar um repositório com um Readme;
- Fazer um Commit e quando é a hora certa de fazer um;
- Acessar o VS Code por meio do GitHub;
- Convidar um colaborador em um repositório do GitHub;
- Como verificar o histórico de commits realizados;
- A diferença entre Git e GitHub;
- Como acessar o histórico de commit de um repositório;
- Aplicar alterações no projeto em um mesmo commit;

 * git restore
    - Trabalhar com essa parte de restauração de arquivos e do projeto, voltando para um estado anterior através do git restore;

* git add
    - Adicionar os arquivos que queremos para o próximo commit através do git add;

* branch
    - O que é;
    - Como criar uma nova branch chamada "develop";
    - Como navegar entre a branch principal "main" e a branch "develop" através do comando git switch;
    - Como enviar todas as alterações feitas na branch "develop" para a branch principal “main” com o merge.

---

</br>

### 📚 Projetos realizados

</br>

[Projeto de Exercícios git e github](/modulo4/exerciciosGit/) - Aqui você encontra uma pasta com um arquivo, que foi utilizado para criação da branch develop e posteriormente merge na branch main, também foram realizados testes com os comandos git status, git add, git restore, git branch, git switch, git commit, utilizando também github na web para alterações e criações no repositório. 

[Projeto Alura midi](/modulo4/javaScript/) - O Alura Midi é um instrumento musical de interface digital, onde a cada botão irá reproduzir o som de um instrumento.  


</br>

> Acesso aos códigos: 


- O Git pode ser instalado nos seguintes sistemas operacionais: [Windows](https://git-scm.com/download/win), [Linux](https://git-scm.com/download/linux) e [MacOS](https://git-scm.com/download/mac).
- Instale o editor de código [Visual Studio Code](https://code.visualstudio.com/download), conforme informações no site;
- Realize o clone `git clone link-do-repositorio` ou download do repositório;
- Na opção `exerciciosGit` você encontra um arquivo HTML que foi utilizado para executar ações como criar branch, realizar commit, push e pull, merge entre as branchs. 
- Na opção `javaScript` você encontra os arquivos do projeto Alura Midi, que pode ser aberto utilizando VSCode para analisar o código ou executar o arquivo `index.html` utilizando seu navegador para visualizar a página. 

---


