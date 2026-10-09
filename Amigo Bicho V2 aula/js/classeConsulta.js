class Consulta{
    constructor (nomeAnimal, veterinario, exames, valorPagar){
        this.nomeAnimal = nomeAnimal;
        this.veterinario = veterinario;
        this.exames = exames;
        this.valorPagar = 150.00;
    }
    //exibir resumo
    exibirResumo(){
        return `Título:📋Resumo da Consulta📋 <br/> Animal:${this.nomeAnimal} <br/> Veterinário:${this.veterinario} <br/> Exames:${this.exames} <br/> Valor:${this.valorPagar}`
    }
    //aplicar desconto
    aplicarDesconto(){
        if(this.exames > 2){
            this.exame = this.exame - (1 - 0.10);
            return `
            Situação: ${true} <br/>
            Seu desconto foi aplicado <br/>
            Novo valor: ${this.exames} <br/>
            `
        }
        else{
            return `
            Situação: ${false} <br/>
            Seu desconto não foi aplicado <br/>
            Novo valor: ${this.exames} <br/>
            `
        }
    }
}
