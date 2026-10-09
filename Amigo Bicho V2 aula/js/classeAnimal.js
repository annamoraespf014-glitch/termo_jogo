class Animal {
    constructor(nome, tipo, raca, idade, peso, tutor) {
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.idade = Number(idade);
        this.peso = Number(peso);
        this.tutor = tutor;
    }

    exibirFicha() {
        return `Título:🐾Ficha do Animal🐾 <br/> Nome do animal: ${this.nome} <br/> Tipo: ${this.tipo} <br/> Raça: ${this.raca} <br/> Idade: ${this.idade} anos <br/> Peso: ${this.peso} kg <br/> Tutor: ${this.tutor}`;
    }

    calcularRacao() {
        const racaoKg = this.peso * 0.02;
        const racaoGramas = racaoKg * 1000;
        return `Peso atual: ${this.peso} kg <br/> Quantidade diária recomendada: ${racaoKg.toFixed(2)} kg (${racaoGramas.toFixed(0)}g)`;
    }

    fazerAniversario() {
        this.idade++;
        return `${this.nome} agora tem ${this.idade} anos!🎉🥳`;
    }
}


