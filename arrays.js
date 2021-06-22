let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
 //console.log(filmes[1]) 

 let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

 // Criei a função para que adicione os elementos 'jogos do cartoon a filmes
  function AdicionarCartoons() {
     let remove= cartoons.shift()
    filmes.push(remove)
  }
 //Exclui o ultimo elemento da lista, que era um "JOGO"
 cartoons.pop();
 // Executei a função ADICIONANDO A ARRAY E SEUS ELEMENTOS DE FILMES DENTRO DA ARRAY FILMES 
  AdicionarCartoons();
  AdicionarCartoons();
  AdicionarCartoons();
  AdicionarCartoons();
//  AdicionarCartoons(); // ESSE ULTIMO VAI DAR UNDEFINED MOSTRANDO QUE TERMINOU

//Imprimi o resultado na tela. 
 //console.log(filmes);
 //console.log(cartoons)