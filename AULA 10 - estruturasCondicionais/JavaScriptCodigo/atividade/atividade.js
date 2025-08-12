let km = 81
let valormulta = 7.00
let multa = 0


if(km > 80){
    multa = (km - 80) * valormulta
    console.log("você foi multado por ultrapassar limite de velocidade");
    console.log("você deve pagar de multa R$: " +multa.toFixed(2)  );   
}else{
    console.log("você esta no limite de velocidade");
    
}
