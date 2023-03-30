var fs = require("fs");
let data = fs.readFileSync("dados4.json", "utf8");
let dados = JSON.parse(data)

var state = "MG" 

let valorTotal = 0
let valorEstado = 0 

dados.map((element) => {

   valorTotal += element.valor
   if(state == element.estado){valorEstado = element.valor}

})

let percentualEstado = valorEstado * 100 / valorTotal; 

console.log(percentualEstado)
