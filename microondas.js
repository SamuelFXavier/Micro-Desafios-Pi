/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
    1 - Pipoca – 10 segundos (padrão);
    2 - Macarrão – 8 segundos (padrão);
    3 - Carne – 15 segundos (padrão);
    4 - Feijão – 12 segundos (padrão);
    5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */
const microondas = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
    esquentar: (comida, tempo) => {
        switch (comida) {
            case 'pipoca':
                tempoPadrao = microondas.pipoca
                return acao(tempo, tempoPadrao);
            case 'macarrao':
                tempoPadrao = microondas.macarrao
                return acao(tempo, tempoPadrao);
            case 'carne':
                tempoPadrao = microondas.carne
                return acao(tempo, tempoPadrao);
            case 'feijao':
                tempoPadrao = microondas.feijao
                return acao(tempo, tempoPadrao);
            case 'brigadeiro':
                tempoPadrao = microondas.brigadeiro
                return acao(tempo, tempoPadrao);
            default:
                return "Prato Inexistente"  }
        function acao(tempoInfo, tempoPadrao) {
            if (tempoInfo > 3 * tempoPadrao) {
                return "Kabummm!!!"
            } else if (tempoInfo > 2 * tempoPadrao) {
                return "Comida queimou !!!"
            } else if (tempoInfo < tempoPadrao) {
                return "Tempo insuficiente"
            } else if (tempoInfo >= tempoPadrao || tempoInfo == null) {
                return "Prato pronto, bom apetite!!!"
            }
        }
    }
}

console.log(microondas.esquentar('limão', 25)); 
console.log(microondas.esquentar('macarrao', 5));
console.log(microondas.esquentar('brigadeiro', 25));
console.log(microondas.esquentar('macarrao', 5));
console.log(microondas.esquentar('brigadeiro', -30));
console.log(microondas.esquentar('brigadeiro',));


