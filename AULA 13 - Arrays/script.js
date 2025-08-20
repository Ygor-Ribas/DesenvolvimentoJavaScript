let times = ["Santos", "Palmeiras", "Corinthians", "São Paulo"]

//Verificar o valor de um item a partir da posição

console.log(times[0]);
console.log(times[1]);




//Adicionando itens no array

times.push("Flamengo")
times.push("Gremio")
times.push("BotaFogo")
times.push("Vasco")
console.log(times);


// Verifiar o tamanho do array

console.log(times.length);


//Adicionar nas primeiras posição

times.unshift("Fluminense")
console.log(times);

//Remover itens do começo da lista

times.shift()

//Remover itens do final da lista

times.pop()
console.log(times);

//Encontrar a posição de um item

console.log(times.indexOf("São Paulo"))

let times2 = ["Santos", "São Paulo", "Palmeiras"]


//.splice

//Remover elemento

times2.splice(1, 1)
console.log(times2);

//Substituir elementos

times2.splice(1, 0, "São Paulo", "Corinthians")
console.log(times2);


