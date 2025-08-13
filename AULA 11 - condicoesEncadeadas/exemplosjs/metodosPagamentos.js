// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Credito = Valor total  


let valorGasto = 1000
let metodoPagamento = 0
let parcelamento = 2


if (metodoPagamento == 1) {
    let valorFinal = valorGasto * 0.9
    
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX")
    console.log("O valor final foi de R$ " + valorFinal);
}

else if(metodoPagamento == 2){
    let valorFinal2 = valorGasto * 0.95
    console.log("MÉTODO DE PAGAMENTO DÉBITO")
    console.log("O valor final foi de R$ " + valorFinal2);
    
    
}

else{
    console.log("MÉTODO DE PAGAMENTO CRÉDTIO")
    let parcelas = 0

    if(parcelamento == 1){
        console.log("Avista " +valorGasto);
        
    }else if(parcelamento == 2){
        parcelas = (valorGasto * 1.05) / 2
        console.log("parcelas em 2x " +parcelas );
        
    }else{
        parcelas = (valorGasto * 1.10) / 3
        console.log("parcelas em " +parcelas );

    }
    
   
}