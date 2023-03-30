let dados = [{"estado": "SP", "valor": 67836.43},{"estado": "RJ", "valor": 36678.66}, {"estado": "MG",  "valor": 29229.88},{"estado": "ES", "valor": 27165.48 },{"estado": "Outros", "valor": 19849.53}];

var state = "MG" 

let valorTotal = 0
let valorEstado = 0 

dados.map((element) => {

   valorTotal += element.valor
   if(state == element.estado){valorEstado = element.valor}

})

let percentualEstado = valorEstado * 100 / valorTotal; 

console.log(percentualEstado)
