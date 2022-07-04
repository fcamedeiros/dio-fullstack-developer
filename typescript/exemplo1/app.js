"use strict";
let button = document.getElementById('button');
let imput1 = document.getElementById('imput1');
let imput2 = document.getElementById('imput2');
function adicionarNumeros(n1, n2, devePrintar, frase) {
    let resultado = n1 + n2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let devePrintar = true;
let frase = 'O valor é: ';
if (button) {
    button.addEventListener('click', () => {
        if (imput1 && imput2) {
            adicionarNumeros(Number(imput1.value), Number(imput2.value), devePrintar, frase);
        }
    });
}
