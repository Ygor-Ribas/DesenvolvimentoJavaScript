let nota1 = 50
let nota2 = 50

let media = (nota1 + nota2) / 2 

if(media >= 70){
    console.log("Aprovado");
    
}
else if (media >= 50){

    console.log("Recuperação");
    let recuperacao = 90
    let mediaFinal = (media + recuperacao) / 2

    if(mediaFinal >= 70){
        console.log("Aprovado");
        
    }else{
        console.log("Reprovado");
        
    }
    
}else{
    console.log("reprovado");
    
}