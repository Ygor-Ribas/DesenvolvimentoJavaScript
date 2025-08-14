function mostrarResultado (){

let ladoA = parseInt(document.querySelector("#ladoA").value)
let ladoB = parseInt(document.querySelector("#ladoB").value)
let ladoC = parseInt(document.querySelector("#ladoC").value)
let resultado = document.querySelector("#resultado") 




 let resultados = 0
if (ladoA == ladoB && ladoB == ladoC ) {
    console.log("Este é um triangulo Equilátero");
    
    resultado.innerHTML = "Este é um triangulo Equilátero" 
   
}else if (ladoA == ladoB  || ladoA == ladoC || ladoB == ladoC){
    console.log("Este é um triangulo Isósceles");
    
    resultado.innerHTML = "Este é um triangulo Isósceles"  
    
}else{
    console.log("Este é um triangulo Escaleno");
    
    resultado.innerHTML = "Este é um triangulo Escaleno"    
    
    
    
}
}