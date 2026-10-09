//exibir resumo
const animal4 = new Consulta("Pacato", "Sandro Cúrio", "Pneumonia, Gripe", 120.00);
const tabela4 = document.getElementById("animal4");
tabela4.innerHTML = animal4.exibirResumo();
