function podeSubir(altura,acompanhada){
    let podeSubir = false;

   if(altura >= 1.40 && altura <2 ){
       podeSubir = "Acesso autorizado "
   } if(altura < 1.40 && acompanhada == true){
       podeSubir = "Acesso com acompanhante"
   } if (altura <= 1.20 && acompanhada == true){
       podeSubir = "Acesso negado"
   }
   return podeSubir;

   }
   




console.log(podeSubir(1.20, true))