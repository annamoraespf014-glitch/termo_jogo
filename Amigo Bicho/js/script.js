const animal1 = new Animal("cão", "buldogue", "4 anos", "40kg", "alguém ai");
const tabela = document.getElementById("animal");

tabela.innerHTML = animal1.exibirFicha();

//calculando racao
const animal2 = new Animal("gato", "persa", 2, 20, "fulano"); 
const tabela2 = document.getElementById("animal2");
tabela2.innerHTML = animal2.calcularRacao();

//fazendo niver
const animal3 = new Animal("peixe", "beta", 3, 1, "beltrano");
const tabela3 = document.getElementById("animal3");
tabela3.innerHTML = animal3.fazerAniversario();
