const animal1 = new Animal("Cão", "Buldogue", "4 anos", "40kg", "Arnaldo");
const tabela = document.getElementById("animal");




tabela.innerHTML = animal1.exibirFicha();




//calculando racao
const animal2 = new Animal("Gato", "Persa", 2, 20, "Sonic");
const tabela2 = document.getElementById("animal2");
tabela2.innerHTML = animal2.calcularRacao();




//fazendo niver
const animal3 = new Animal("Peixe", "Beta", 3, 1, "Mário");
const tabela3 = document.getElementById("animal3");
tabela3.innerHTML = animal3.fazerAniversario();
