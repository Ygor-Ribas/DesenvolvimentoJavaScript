function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let soma = numero + 1
    let subtracao = numero - 1

    console.log("O sucessor de ", numero, "é " +soma);
    console.log("O antecessor de ", numero, "é " +subtracao);
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "O sucessor de "+ numero + " é " +soma + "<br> O antecessor "+ numero + " é " +subtracao 
    
}