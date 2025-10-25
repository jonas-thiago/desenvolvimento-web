// Variável para guardar o saldo, começa em 0
let saldo = 0;

// 1. PEGAR OS ELEMENTOS DO HTML
// "Buscando" os links e o local do saldo pelo ID que demos a eles
const linkDepositar= document.getElementById('depositar');
const linkSacar = document.getElementById('sacar');
const linkVerSaldo = document.getElementById('ver-saldo');
const linkSair = document.getElementById('sair');
const elementoSaldo = document.getElementById('valor-saldo');

// 2. CRIAR AS FUNÇÕES PARA CADA AÇÃO

function depositar(){
    // Pede o valor ao usuário
    const valor = prompt('Digite o valor a ser depositado: ');
    // Converte o texto para número e soma ao saldo
    if (valor !== null && ! isNaN(valor) && valor > 0) {
        saldo += Number(valor);
        alert('Deposito de R$ ' + valor + ' realizado com sucesso!');
        atualizarSaldoNaTela();
    } else {
        alert('Valor Inválido. Por Favor. Tente Novamente.');
    }
}

function sacar(){
    const valor = prompt('Digite o valor a ser sacado: ')
    // Verifica se o valor é válido e se há saldo suficiente
    if (valor !== null && ! isNaN(valor) && valor > 0) {
        if (Number(valor) > saldo) {
            alert('Saldo Insuficiente, Por Favor. Tente Novamente');
        } else {
            saldo -= Number(valor);
            alert('Saque de R$ ' + valor + ' realizado com Sucesso');
            atualizarSaldoNaTela();
        }
        
    } else {
        alert('Valor Inválido. Por Favor. Tente Novamente');
    }
}

function verSaldo() {
    // Mostrar o Saldo em um alerta
    alert('Seu Saldo atual é de: R$ ' + saldo.toFixed(2));
}

function sair(){
    alert('Obrigado por usar o nosso Banco! Volte Sempre!');

}

// Uma função para deixar o saldo na tela sempre atualizado
function atualizarSaldoNaTela() {
    elementoSaldo.textContent = saldo.toFixed(2)
    // toFixed(2) para mostrar 2 casas decimais
}

// 3. CONECTAR OS CLIQUES ÀS FUNÇÕES (EVENT LISTENERS)
// Dizemos: "Quando o elemento X for clicado, execute a função Y"

linkDepositar.addEventListener('click', depositar);
linkSacar.addEventListener('click', sacar);
linkVerSaldo.addEventListener('click', verSaldo);
linkSair.addEventListener('click', sair);
