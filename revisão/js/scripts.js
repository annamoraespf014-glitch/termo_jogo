let nomes = [];

function mostrar(){
    let mostrar_nomes = document.getElementById("listaNomes");
    mostrar_nomes.innerHTML = "";
    nomes.map((nome)  =>{
        mostrar_nomes.innerHTML+=`<li>${nome}</li>`
});
}
function adicionar(){
    let input = document.getElementById("adicionar");
    let nome = input.value;
    nomes.push(nome)
    console.log(nome)
}
let botao = document.getElementById("bntAdicionar");

botao.addEventListener("click", adicionar);
console.log("botão clicado")

function limparTudo(){
    let res = document.getElementById("listaNomes");
    res.innerHTML = "";
    nomes = [];
    mostrar();
    console.log("limpo")
}
let botaoLimpar = document.getElementById(bntLimpar);

botaoLimpar.addEventListener("click", limparTudo)