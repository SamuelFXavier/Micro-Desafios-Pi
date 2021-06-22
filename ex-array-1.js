let produtosCompra = ["pão","manteiga","arroz","feijão","tomate","nescau","leite","suco-natural","requeijão","frios"]

// join 
console.log("Join separa os meus elementos com caracteres, que eu inserir nele como parametro, e os transforma em string")
console.log(produtosCompra.join(" - "))

// POP
console.log("Pop exclui o ultimo elemento da minha array")
console.log(produtosCompra.pop())
console.log(produtosCompra.join(" - ")) // USEI O JOIN AQUI PARA MOSTRAR MELHOR QUE ESTÁ SEM OS FRIOS

// push 
console.log("Push adiciona um elemento a minha array")
 produtosCompra.push("Alface")
console.log(produtosCompra.join(" - ")) // USEI O JOIN AQUI PARA MOSTRAR MELHOR AS MODIFICAÇÕES

// Shift 
console.log("Shift exclui o primeiro elemento da minha array")
console.log(produtosCompra.shift())
console.log(produtosCompra.join(" - ")) // USEI O JOIN AQUI PARA MOSTRAR MELHOR AS MODIFICAÇÕES

// UNSHIFT
console.log("Unshift adiciona um elemento ao inicio da minha array")
console.log(produtosCompra.unshift("Goiaba"))
console.log(produtosCompra.join(" - ")) // USEI O JOIN AQUI PARA MOSTRAR MELHOR AS MODIFICAÇÕES 

// LENGTH
console.log("length conta a quantidade de indices da minha array")
console.log(produtosCompra.length) 