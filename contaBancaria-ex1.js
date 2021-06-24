//função declarativa
 function Conta(numeroDeConta,saldo,nomeDoTitular){
    this.numeroDeConta= numeroDeConta;
    this.saldo= saldo;
    this.nomeDoTitular= nomeDoTitular;
    this.deposito = function(dinheiro){
         this.saldo+= dinheiro; 
         console.log('você reazlizou um deposito de '+ dinheiro + ' Agora seu saldo é de '+ this.saldo); 
    }

    this.saque = function(dinheiroSacar){
         
        if(dinheiroSacar > this.saldo){
            console.log('Fundos Insulficientes')
        }else{ 
            this.saldo-= dinheiroSacar;
            console.log('Agora seu saldo é: ' + this.saldo)
        }
    }
        

}

let conta = new Conta(10203040,1500,'Samuel Xavier');

conta.deposito(1500);
conta.saque(500);






let conta1 = {
    numeroDeConta: '10203040', 
    saldo: 1000,
    nomeDoTitular: 'Samuel Xavier',
    deposito: function(dinheiro){
        this.saldo+= dinheiro; 
        console.log('você reazlizou um deposito de '+ dinheiro + ' Agora seu saldo é de '+ this.saldo); 
    },
    saque:function(dinheiroSacar){
         
        if(dinheiroSacar > this.saldo){
            console.log('Fundos Insulficientes')
        }else{ 
            this.saldo-= dinheiroSacar;
            console.log('Agora seu saldo é: ' + this.saldo);
        }
    }
}   

conta1.saque(800);
conta1.deposito(600);