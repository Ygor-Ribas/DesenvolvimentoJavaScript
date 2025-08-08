let valorGasto = 1000
let metodoPagamento = 1

if (metodoPagamento == 1){
    console.log("Método de pagamento Boleto/pix")
    let valorFinal = valorGasto * 0.9
    console.log("O valor final foi de R$ " +valorFinal);
    
}else{
    console.log("Método de pagamento crédito")
    console.log("O valor final foi de R$ " +valorGasto);
}