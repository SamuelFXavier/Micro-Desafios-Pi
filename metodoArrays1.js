// 1 - Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numerosPares = [2,4,6,8,10,12,14,16];

let numerosimpares = numerosPares.map(function(numeros){
    return numeros + 1;
});

console.log(numerosimpares);


// 2 - Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nome = ['Samuel', 'Pedro','Maria','Thiago','João','Maria']

let marias = nome.filter(function(nome){
    return nome === 'Maria' 
}
);
console.log(marias);

// 3 - Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
 
let numero = [3,9,8,5,2,11];

let devolverString = numero.reduce(function(acumulador,numero){
     return acumulador + "-" + numero;
}
);

console.log(devolverString);

// 4 Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

//Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.


let animais = ['cachorro','pato','boi','gato','cavalo','elefante']

 animais.forEach(function(animais) {
    console.log('O animal é:'+' '+animais);
})

