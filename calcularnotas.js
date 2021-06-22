let aluno ={
    nome: 'Rafael',
    numeroDoArquivo: 322602,
    listaDeNotas: [9,10,3,4,5,6,7,8,9,10],
    calcularMedia(notaAprovacao){
        let result= this.listaDeNotas.reduce((acumulador,valor) => {
            return acumulador+= valor;
        });

        let media = result / this.listaDeNotas.length
        if(media >= notaAprovacao){
            console.log('Você Foi aprovado')
        }else{
            console.log('Estude mais hahaha!!!')
        }
    }
}

aluno.calcularMedia(4);