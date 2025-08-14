function mostrarResultado(){

    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)
    let media = document.querySelector("#media")
    let resultado = document.querySelector("#resultado")
    let operacao= document.querySelector("#operacoes").value
   
    console.log(operacao);
    let resultados = 0
     if (operacao == "adicao") {
        console.log(num1 + num2);
         resultados = num1 + num2
        resultado.innerHTML = "resultado " +resultados

          
     }else if (operacao == "subtracao") {
        console.log(num1 - num2);
         resultados = num1 - num2
        resultado.innerHTML = "resultado " +resultados


     }else if(operacao == "divisao"){
        console.log(num1 / num2);
        resultados = num1 / num2
        resultado.innerHTML = "resultado " +resultados


     }else{
        console.log(num1 * num2);
        resultados = num1 * num2
        resultado.innerHTML = "resultado " +resultados
        
     }
        
       
        
    
    

   
}