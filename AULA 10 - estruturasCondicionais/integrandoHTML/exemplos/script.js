function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let paragrafomedia = document.querySelector("#media")
    let paragraforesultado = document.querySelector("#resultado")

    let media = (nota1 + nota2) /2
    paragrafomedia.innerHTML = "A sua média foi de " +media

    if(media >= 7 ){
        paragraforesultado.innerHTML = "Aprovado"
        paragraforesultado.style.color = "green"
        
    }else{
        paragraforesultado.innerHTML = "Reprovado"
        paragraforesultado.style.color = "red"

    }
}