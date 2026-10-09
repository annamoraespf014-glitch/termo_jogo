class Animal {
    constructor (tipo, raca, idade, peso, tutor){
        this.tipo = tipo;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
        this.tutor = tutor;
    }
    //exibindo ficha
    exibirFicha(){
        return `Título:🐾Ficha do Animal <br/> Tipo:${this.tipo} <br/> Raça:${this.raca} <br/> Idade:${this.idade} <br/> Peso:${this.peso} <br/> Tutor:${this.tutor}` 
    }
    calcularRacao(){
        const animal2 = this.peso;
        this.peso = this.peso * 0.02;
        return `A quantidade diária recomendada de ração é: ${this.peso} kg`
    }
    fazerAniversario(){
        this.idade++;
        return `${this.tipo} agora tem ${this.idade} anos!🎉🥳`
    }
}