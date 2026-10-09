//exibir resumo
const animal4 = new Consulta("Pacato", "sandro curio", "pneumonia, gripe", 120.00);
const tabela4 = document.getElementById("animal4");
tabela4.innerHTML = animal4.exibirResumo();