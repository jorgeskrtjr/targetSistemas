var fs = require("fs");

let data = fs.readFileSync("dados3.json", "utf8");

let dados = JSON.parse(data)

const valores = []

dados.map((dado) => {valores.push(parseFloat(dado.valor))})

//Calculando a média
const valoresLimpo = valores.filter(numero => numero !== 0) 
const media = valoresLimpo.reduce((soma, valor) => soma + valor, 0) / valoresLimpo.length;
var cont = 0
console.log(media)
valores.map((valor) => {
    if(valor > media && valor != 0 ){cont++}
})

console.log("O valor foi maior por " + cont + " dias")

//Calculando o maior 
var maior = valores.sort(function(a, b){return b - a;})[0];
console.log("maior => " + maior)


//Calculando o menor
var menor = 0;

for (var i = 0; i < valores.length; i++) {
   if ( valores[i] < menor ) {
    menor = valores[i];
 }
}
console.log("menor => " + menor)

