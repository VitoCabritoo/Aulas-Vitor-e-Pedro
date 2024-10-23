// Função para executar loops
function executarLoops() {
    var userNumber = document.getElementById('userNumber').value;
    var resultado = '';

    // Laço while
    var x = 0;
    resultado += 'Loop While:<br>';
    while (x <= userNumber) {
        resultado += x + ' ';
        x++;
    }

    // Laço for
    resultado += '<br>Loop For:<br>';
    for (var i = 0; i <= userNumber; i++) {
        resultado += i + ' ';
    }

    // Exibe os resultados
    document.getElementById('loopResults').innerHTML = resultado;
}

// Função para escolher item do cardápio
function escolherItem(item) {
    var resposta = '';

    if (item == 1) {
        resposta = 'Você escolheu Suco!';
    } else if (item == 2) {
        resposta = 'Você escolheu Água gelada!';
    } else if (item == 3) {
        resposta = 'Você escolheu Sorvete!';
    } else if (item == 4) {
        resposta = 'Você chamou o garçom!';
    }

    // Exibe a resposta
    document.getElementById('menuResponse').innerHTML = resposta;
}
