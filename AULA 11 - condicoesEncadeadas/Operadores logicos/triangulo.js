let ladoA = 10
let ladoB = 10
let ladoC = 10

let ladoAB = ladoA + ladoB
let ladoAC = ladoA + ladoC
let ladoBC = ladoB + ladoC


if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA) {
    console.log("Lados validos para formar um triangulo");
   
}else{
    console.log("Lados invalidos para formar um triangulo");
    
}