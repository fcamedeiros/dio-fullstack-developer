"use strict";
function somaValoresNumericos(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericos(1, 3, aoQuadrado));
console.log(somaValoresNumericos(1, 3, dividirPorEleMesmo));
