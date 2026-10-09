class Animal {
    constructor (nome, tipo, raca, idade, peso, tutor){
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.tutor = tutor;
    }
    //exibindo ficha
    exibirFicha(){
        return `Título:🐾Ficha do Animal🐾 <br/> Nome do animal:${this.nome} <br/> Tipo:${this.tipo} <br/> Raça:${this.raca} <br/> Idade:${this.idade} <br/> Peso:${this.peso} <br/> Tutor:${this.tutor}`
    }
    calcularRacao(){
        //const animal2 = this.peso;
        const racao_kg = this.peso * 0.02;
        const racao_gramas = racao_kg * 1000;
        return{
            peso_atual: this.peso,
            quant_kg: racao_kg,
            quant_grama: racao_gramas
        };
    }
    fazerAniversario(){
        this.idade++;
        return `${this.tipo} agora tem ${this.idade} anos!🎉🥳`
    }
}
