function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let paragrafomedia = document.querySelector("#media")
    let paragrafoResultado = document.querySelector("#resultado")

    let media = (nota1 + nota2) /2
    paragrafomedia.innerHTML = "A sua média foi de " +media

    if(media >= 7 ){
        paragrafoResultado.innerHTML = "Aprovado"
        paragrafoResultado.computedStyleMap.color ="blue"
        
    }else{
        paragrafoResultado.innerHTML = "Reprovado"
        paragrafoResultado.computedStyleMap.color ="red"

    }
}