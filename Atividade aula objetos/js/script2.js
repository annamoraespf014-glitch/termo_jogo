const serie1 = new Serie("O Mentalista", 7, "23/09/2008", 8.2);
const serie2 = new Serie("Grimm Contos de terror", 7, "28/12/2011", 7.9);
const serie3 = new Serie("Turn: Os espiões de Washington", 4, "06/04/2014", 8.1);

console.log(serie1.exibirSerie());
console.log(serie2.exibirSerie());
console.log(serie3.exibirSerie());

serie1.modificarNota(10);
console.log(serie1, serie2, serie3)

