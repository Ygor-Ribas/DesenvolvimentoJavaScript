let produtos = [
    {tipo: "Notebook", preco: 5000, categoria: "Eletronico"},
    {tipo: "Teclado", preco: 200, categoria: "Periferico"},
    {tipo: "Mouse", preco: 200, categoria: "Periferico"},
    {tipo: "Computador", preco: 5000, categoria: "Eletronico"},
    {tipo: "Monitor", preco: 800, categoria: "Eletronico"},
    {tipo: "Fone", preco: 200, categoria: "Periferico"},
    {tipo: "Microfone", preco: 300, categoria: "Periferico"},
    {tipo: "Processador", preco: 3100, categoria: "Eletronico"},
    {tipo: "Placa de video", preco: 2000, categoria: "Eletronico"},
    {tipo: "Mouse Pad", preco: 100, categoria: "Periferico"},
]

produtos.forEach((produto) => {
    console.log(produto.tipo + " R$:" + produto.preco);
    
})

const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletronico")
console.log(produtosEletronicos);

produtosEletronicos.forEach((produto) => {
    console.log(produto.tipo + " R$:" + produto.preco);

})

const produtosEletronicosDesconto = produtosEletronicos.map(produto => ({
    
tipo: produto.tipo, 
preco: produto.preco * 0.95,
categoria: produto.categoria


}))
