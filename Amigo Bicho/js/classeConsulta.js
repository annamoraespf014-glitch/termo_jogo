class Consulta{
    constructor (nomeAnimal, veterinario, exames, valorPagar){
        this.nomeAnimal = nomeAnimal;
        this.veterinario = veterinario;
        this.exames = exames;
        this.valorPagar = 150.00;
    }
    //exibir resumo
    exibirResumo(){
        return `Título:📋Resumo da Consulta <br/> Animal:${this.nomeAnimal} <br/> Veterinário:${this.veterinario} <br/> Exames:${this.exames} <br/> Valor:${this.valorPagar}` 
    }
    //aplicar desconto
    aplicarDesconto(){}
}