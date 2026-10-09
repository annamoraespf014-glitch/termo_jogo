class Serie {
    constructor (nome, temporadas, data_lancamento, nota){
        this.nome = nome;
        this.temporadas = temporadas;
        this.data_lancamento = data_lancamento;
        this.nota = nota; 
    }

    //1° método
    exibirSerie(){
    return `Série ${this.nome}| Temporadas: ${this.temporadas}| Lançamento: ${this.data_lancamento}| Nota:${this.nota}`
    }
    //método 2
    modificarNota(nota_nova){
        this.nota = nota_nova;
        console.log(`A nota de ${this.nome} foi alterada pra ${this.nota}`);
    }
}

