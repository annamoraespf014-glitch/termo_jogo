
const arrPet = [];

function cadastro() {
    let nome = document.getElementById("idnome").value;
    let tipo = document.getElementById("idtipo").value;
    let raca = document.getElementById("idraca").value;
    let idade = document.getElementById("ididade").value;
    let peso = document.getElementById("idpeso").value;
    let tutor = document.getElementById("idtutor").value;

    if (nome && tipo && raca && idade && peso && tutor) {
        const pet1 = new Animal(nome, tipo, raca, idade, peso, tutor);
        arrPet.push(pet1);
        alert("Cadastro Finalizado!");
        limparCampos();
    } else {
        alert("Preencha todos os campos!");
    }
}
function mostrarFicha() {
    let pergunta = prompt("Qual o nome do animal?");
    if (!pergunta) return;

    const listagem1 = document.getElementById("animal");
    listagem1.innerHTML = ""; // Limpa a div antes de exibir

    const petEncontrado = arrPet.find(pet => pet.nome.toLowerCase() === pergunta.toLowerCase());

    if (petEncontrado) {
        // 1. Cria um elemento para exibir a ficha do pet
        const divFicha = document.createElement("div");
        divFicha.innerHTML = petEncontrado.exibirFicha();
        listagem1.appendChild(divFicha);

        // 2. Cria um elemento para exibir mensagens de cálculo ou aniversário
        const divResultado = document.createElement("div");
        divResultado.style.marginTop = "10px";
        listagem1.appendChild(divResultado);

        // 3. Container para manter os botões organizados sem sobrescrever a tela
        const divBotoes = document.createElement("div");
        divBotoes.style.marginTop = "10px";

        // Botão Fazer Aniversário
        let btnaniver = document.createElement("button");
        btnaniver.textContent = "Fazer Aniversário";
        btnaniver.addEventListener("click", function () {
            const mensagem = petEncontrado.fazerAniversario();
            
            // Atualiza o texto da ficha na tela com a nova idade
            divFicha.innerHTML = petEncontrado.exibirFicha();
            
            // Exibe a mensagem de comemoração
            divResultado.innerHTML = `<strong>${mensagem}</strong>`;
        });

        // Botão Calcular Ração
        let btnracao = document.createElement("button");
        btnracao.textContent = "Calcular Ração";
        btnracao.style.marginLeft = "5px";
        btnracao.addEventListener("click", function () {
            divResultado.innerHTML = petEncontrado.calcularRacao();
        });

        // Adiciona os botões no container de botões
        divBotoes.appendChild(btnaniver);
        divBotoes.appendChild(btnracao);
        
        // Adiciona o container de botões à página
        listagem1.appendChild(divBotoes);

    } else {
        alert("Animal não encontrado!");
    }
}
    
function limparCampos() {
    document.getElementById("idnome").value = "";
    document.getElementById("idtipo").value = "";
    document.getElementById("idraca").value = "";
    document.getElementById("ididade").value = "";
    document.getElementById("idpeso").value = "";
    document.getElementById("idtutor").value = "";
}
