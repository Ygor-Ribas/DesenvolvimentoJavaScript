function mostrarResultado(){
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    let notaRecuperacao = document.querySelector("#notaRecuperacao")
    let resultadoMedia = document.querySelector("#media")
    let resultado = document.querySelector("#resultado")

    let media = (nota1 + nota2) / 2
    resultadoMedia.innerHTML = "A sua media é de " +media
    
    if (media >= 70){
        resultado.innerHTML = "Aprovado"
        resultado.style.color = "green"
         notaRecuperacao.style.display = "none"
        
        
    }else if(media >= 50){
        let valorNotaRecuperacao = parseInt(notaRecuperacao.value) 
        let mediaFinal = (media + valorNotaRecuperacao) / 2
        resultadoMedia.innerHTML = "A sua media é de " +media
        
        
        
        
        
        
        if (isNaN(valorNotaRecuperacao)) {
            resultado.innerHTML = "Recuperação"
            resultado.style.color = "orange"
            notaRecuperacao.style.display = "block"
            
        }
        
        
        
        else if(mediaFinal >= 70 ){
            resultadoMedia.innerHTML = "A sua media é de " +mediaFinal
            resultado.innerHTML = "Aprovado"
            resultado.style.color = "green"
            
        }else{
            resultadoMedia.innerHTML = "A sua media é de " +mediaFinal
             resultado.innerHTML = "Reprovado"
             resultado.style.color = "red"
              notaRecuperacao.style.display = "none"

        }
    }
}