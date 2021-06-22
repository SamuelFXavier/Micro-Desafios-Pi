let numerosPrimos = [2,3,5,7,11,13,17,19];

let numeros = [1,10,20,30,40, ...numerosPrimos,23,29,31,37];

// console.log(numeros);


function maiorNumero(...paramts) {
     return Math.min(...paramts);
}


console.log(maiorNumero(...numeros));