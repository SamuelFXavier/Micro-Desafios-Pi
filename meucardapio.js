function Restaurante(nome,cardapio){
    this.nome = nome
    this.cardapio = cardapio
    this.entrada = function() {
      console.log('Bem vindo ao ' + this.nome +' Aqui esta nosso cardapio ' + this.cardapio)
    };
      
}

const restaurante = new Restaurante('Sabores de casa',['Filé de frango','bife acebolado','Feijoada']);

restaurante.entrada();