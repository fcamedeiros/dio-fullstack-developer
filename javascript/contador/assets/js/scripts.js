var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if(currentNumber >= 10) {
        alert("Incremento limitado a 10 para fins acadêmicos!");
        return;
    }

    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        alterarEstiloCurrentNumber(0);
    } else {
        alterarEstiloCurrentNumber(1);
    }

    if(currentNumber < 10 && currentNumber > -2) {
        alteraEstiloBotao("subtrair", 1);
        alteraEstiloBotao("incrementar", 1);
    } else if(currentNumber === 10) {
        alteraEstiloBotao("incrementar", 0);
    }
}

function decrement() {
    if(currentNumber <= -2) {
        alert("Decremento limitado a -2 para fins acadêmicos!");
        return;
    }

    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        alterarEstiloCurrentNumber(0);
    } else {
        alterarEstiloCurrentNumber(1);
    }

    if(currentNumber < 10 && currentNumber > -2) {
        alteraEstiloBotao("subtrair", 1);
        alteraEstiloBotao("incrementar", 1);
    } else if(currentNumber === -2) {
        alteraEstiloBotao("subtrair", 0);
    }
}

function load() {
    var el1 = document.getElementById("subtrair");
    var el2 = document.getElementById("incrementar");

    el1.addEventListener("click", () => {decrement()}, false);
    el2.addEventListener("click", () => {increment()}, false);
}

function alteraEstiloBotao(id, desabilita) {
    var botaoWrapper = document.getElementById(id);

    if(desabilita === 0) {
        botaoWrapper.className = "botaoDesativo";
    } else {
        botaoWrapper.className = "botaoAtivo";
    }
}

function alterarEstiloCurrentNumber(negativo) {
    var currentWrapper = document.getElementById("currentNumber");

    if(negativo===0){
        currentWrapper.className = "currentNumberNegativo";
    } else {
        currentWrapper.className = "currentNumberPostivo";
    }
}