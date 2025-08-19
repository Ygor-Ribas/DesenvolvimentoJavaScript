const input = require("prompt-sync")();

let inicio = parseInt(input("Digite o termo inicial: "));
let fim = parseInt(input("Digite o termo final: "));
let razao = parseInt(input("Digite a razão: "));



console.log("progressão aritimetica gerada");

for (let i = inicio; i <= fim; i += razao){
    console.log(i);
}
