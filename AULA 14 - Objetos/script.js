let produto = {
    tipo: "notebook",
    preco: 3500,
    marca: "positivo",
    processador: "intel celeron",
    emEstoque: true
}

console.log(produto);
console.log(produto.marca);
console.log(produto.preco);

console.log(produto["tipo"]);


produto.memoriaRam = "4 GB"

console.log(produto);

delete produto.emEstoque
console.log(produto);





