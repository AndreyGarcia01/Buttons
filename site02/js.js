// Função para esconder todos os painéis
function hideAllPanels() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('fundo-cron').style.display = 'none';
    document.getElementById('conversor-panel').style.display = 'none';
}

// Funções para exibir cada painel
function showCalc() {
    hideAllPanels();
    document.getElementById('container').style.display = 'block'; // Exibe o painel da calculadora
}

function showCron() {
    hideAllPanels();
    document.getElementById('fundo-cron').style.display = 'block'; // Exibe o painel do cronômetro
}

function showConverter() {
    hideAllPanels();
    document.getElementById('conversor-panel').style.display = 'block'; 
}

function hideCalc() {
    document.getElementById('container').style.display = 'none';
}

function hideCron() {
    document.getElementById('fundo-cron').style.display = 'none'; 
}

function hideCon() {
    document.getElementById('conversor-panel').style.display = 'none'; 
}

function hideHol() {
    document.getElementById('dias-ate-feriado').style.display = 'none';
}


// Funções do Conversor de Moeda
function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;
    let taxaConversao;

    switch (moeda) {
        case 'USD':
            taxaConversao = 5.77;
            break;
        case 'EUR':
            taxaConversao = 6.15;
            break;
        case 'GBP':
            taxaConversao = 7.41;
            break;
        default:
            taxaConversao = 1;
    }

    const resultadoConversao = valor * taxaConversao;
    const respostaDiv = document.querySelector('.resposta-con');
    if (valor && !isNaN(valor)) {
        respostaDiv.textContent = `Valor convertido: ${resultadoConversao.toFixed(2)} ${moeda}`;
    } else {
        respostaDiv.textContent = 'Por favor, insira um valor válido.';
    }
}

// Funções do cronômetro (igual ao código anterior)
let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function formatTime() {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startCron() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function() {
            if (seconds < 59) {
                seconds++;
            } else {
                seconds = 0;
                minutes++;
            }
            document.getElementById('painel-tempo').textContent = formatTime();
        }, 1000);
    }
}

function stopCron() {
    clearInterval(timer);
    isRunning = false;
}

function resetCron() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    document.getElementById('painel-tempo').textContent = formatTime();
}

// Funções da calculadora (igual ao código anterior)
function appendNumber(number) {
    const display = document.getElementById('display');
    display.textContent += number;
}

function appendOperation(operator) {
    const display = document.getElementById('display');
    display.textContent += operator;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Erro';
    }
}


// Funções para exibir e esconder os painéis
function showFeriado() {
    hideAllPanels();
    document.getElementById('dias-ate-feriado').style.display = 'block';
}

function hideAllPanels() {
    document.getElementById('container').style.display = 'none';  // Calculadora
    document.getElementById('fundo-cron').style.display = 'none';  // Cronômetro
    document.getElementById('conversor-panel').style.display = 'none';  // Conversor
    document.getElementById('dias-ate-feriado').style.display = 'none'; // Feriado
}

// Função para calcular os dias até o feriado
function calcularDias() {
    const inputData = document.getElementById('data-feriado').value;
    const resultadoDiv = document.getElementById('resultado-feriado');
    
    if (!inputData) {
        resultadoDiv.textContent = 'Por favor, insira uma data!';
        return;
    }

    const dataFeriado = new Date(inputData);
    const hoje = new Date();
    const diferenca = dataFeriado - hoje;
    const diasRestantes = Math.ceil(diferenca / (1000 * 3600 * 24));

    if (diasRestantes < 0) {
        resultadoDiv.textContent = 'Essa data já passou!';
    } else if (diasRestantes === 0) {
        resultadoDiv.textContent = 'O feriado é hoje! 🎉';
    } else {
        resultadoDiv.textContent = `Faltam ${diasRestantes} dias para o feriado!`;
    }
}


