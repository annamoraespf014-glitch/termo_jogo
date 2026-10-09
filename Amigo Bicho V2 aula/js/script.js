const animal1 = new Animal("Rex", "Cão", "Buldogue", 4, 40, "Arnaldo");
const tabela = document.getElementById("animal");
tabela.innerHTML = animal1.exibirFicha();

const animal2 = new Animal("Mimi", "Gato", "Persa", 2, 20, "Sonic");
const tabela2 = document.getElementById("animal2");
tabela2.innerHTML = animal2.calcularRacao();
