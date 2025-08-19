const input = require("prompt-sync")();


let soma = 0

for (let i = 1; i <= 3; i++ ){
    let numero = parseInt(input("Digite um valor: "))
    
    if(numero %3 == 0){
        
        
    
    soma += numero;
    console.log("numero valido ", soma);
    
}
}








