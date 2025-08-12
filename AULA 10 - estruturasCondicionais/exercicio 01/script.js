function  mostrarResultado(){

let km = parseInt(document.querySelector("#km").value)
let resultado = document.querySelector("#resultado")



if(km > 80){
    let resultadoMulta = (km - 80) * 7
    resultado.innerHTML = "A sua multa foi de " +resultadoMulta.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    
      
}else{
    resultado.innerHTML = "você esta no limite de velociade"
    
}
}