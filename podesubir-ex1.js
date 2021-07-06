function podeSubir(altura,acompanhada){
    let podeSubir = false;

   if(altura >= 1.40 && altura <200 ){
       podeSubir = "Acesso autorizado "
   } if(altura < 1.40 && acompanhada == true){
       podeSubir = "Acesso com acompanhante"
   } if (altura <= 1.20 && acompanhada == true){
       podeSubir = "Acesso negado"
   }
   return podeSubir;

   }
   
console.log(podeSubir(1.21, true));




// function podeSubir(altura,acompanhada){
    
//    if(altura >= 1.40 && altura <200 ){
//        return true;
//    }else if(altura <= 1.40 && acompanhada == true){
//        return true;
//    }else if (altura <= 1.20 && acompanhada == true){
//        return true;
//    }else{
//     return false;   
//    }
// }   

//    console.log(podeSubir(1.20,true));