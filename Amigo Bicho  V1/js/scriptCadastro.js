const arrPet = [];
function cadastro(){
    let nome = document.getElementById("idnome").value;
    let tipo = document.getElementById("idtipo").value;
    let raca = document.getElementById("idraca").value;
    let idade = document.getElementById("ididade").step = "2";
    let peso = document.getElementById("idpeso").value;
    let tutor = document.getElementById("idtutor").value;

    if(nome && tipo && raca && idade && peso && tutor != null){
        const pet1 = new Animal(nome, tipo, raca, idade, peso, tutor);
        arrPet.push(pet1);
        alert("Cadastro Finalizado!")
    }else{
        alert("Digite algo")
    }
   
}
function mostrarFicha(){
    let pergunta = prompt("Qual o nome do animal?");
    const listagem1 = document.getElementById("lista1");

    for (const object of arrPet) {
        if(pergunta == object.nome){
            let bicho = object
            return listagem1.innerHTML = bicho.exibirFicha();
        }else{
            return `Animal não encontrado!`
        }
    }
    
}
function limparCampos(){
    document.getElementById("idnome").value = "";
    document.getElementById("idtipo").value = "";
    document.getElementById("idraca").value = "";
    document.getElementById("ididade").value = "";
    document.getElementById("idpeso").value = "";
    document.getElementById("idtutor").value = "";
}
function calcular(){
    
}