// function Restaurante(nome,cardapio){
//     this.nome = nome
//     this.cardapio = cardapio
//     this.entrada = function() {
//       console.log('Bem vindo ao ' + this.nome +' Aqui esta nosso cardapio ' + this.cardapio)
//     };
      
// }

// const restaurante = new Restaurante('Sabores de casa',['Filé de frango','bife acebolado','Feijoada']);

// restaurante.entrada();


// function Microondas(alimento,tempo) {
//   this.tempo = tempo
//   this.alimento = alimento
//   this.queimou = 2* this.tempo
//   this.insulficiente = this.tempo
//   this.esquentar = function(){
//       if( this.queimou >= this.tempo   ){
//         console.log("comida queimou")
//       } else if( this.queimou) {
//         console.log("voce esta fazendo certo  ")
//       }

//   }
   
// }

// const menuComidas1 = new Microondas('pipoca',15);
// //  const menuComidas2 = new Microondas();

// menuComidas1.esquentar();

const microondas = {
  pipoca : 10,
  macarrao: 8,
  carne: 15,
  feijao: 12,
  brigadeiro: 8,
  esquentar:(comida)=> {
     if(comida == pipoca || macarrao || carne || feijao || brigadeiro){
           
     }
    return comida + 10 }
};



console.log(microondas.pipoca);
console.log(microondas.macarrao);
console.log(microondas.carne);
console.log(microondas.feijao);
console.log(microondas.brigadeiro);
console.log(microondas.esquentar(microondas.pipoca));
