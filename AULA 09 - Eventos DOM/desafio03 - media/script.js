function mostrarResultado(){
    let numero = parseInt(document.getElementById("numero").value)
    let dobro = numero*2
    let triplo = numero *3
    let raiz = Math.sqrt(numero)

    console.log("A raiz quadrada de ", numero, " é " +raiz);
    console.log("O dobro de ", numero, "é " +dobro);
    console.log("O triplo de ", numero, "é " +triplo);
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "O dobro de "+ numero + " é " +dobro + "<br> O triplo de "+ numero + " é " +triplo+ "<br> A raiz quadrada de "+ numero + " é " +raiz
    
}