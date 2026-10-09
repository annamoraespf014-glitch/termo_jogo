const arrConsultas =[];

function agendarConsulta(){
    let nomeAnimal = document.getElementById("idnome").value;
    let veterinario = document.getElementById("idveterinario").value;
    let exames = document.getElementById("idexames").value;

    if (nomeAnimal && veterinario && exames) {
        const consulta1 = new Consulta(nomeAnimal, veterinario, exames);
        arrConsultas.push(consulta1);
        localStorage.setItem("dadosConsulta", JSON.stringify(consulta1));
        alert("Cadastro Finalizado!");
        limparCampos();
    } else {
        alert("Preencha todos os campos!");
    }
}
function limparCampos() {
    document.getElementById("idnome").value = "";
    document.getElementById("idveterinario").value = "";
    document.getElementById("idexames").value = "";
}
function mostrarResumo(){
    const container = document.getElementById("animal4");
    if (arrConsultas.length === 0) {
        container.innerHTML = "Nenhuma consulta agendada.";
        return;
    }

    let html = "<h3>Resumo das Consultas:</h3>";
    arrConsultas.forEach((c, index) => {
        html += `<p>#${index + 1} - Pet: ${c.nomeAnimal} | Vet: ${c.veterinario} | Exames: ${c.exames}</p>`;
    });
    container.innerHTML = html;
}
function calcularDesconto() {
    alert("Função de desconto a ser implementada.");
}