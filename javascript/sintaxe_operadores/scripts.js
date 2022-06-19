function compara(x, y) {
    let soma  = 0;
    let output = `Output: Os números ${x} e ${y} `;
    
    soma = x + y;

    output += x === y ?  "são iguais. " :  "não são iguais. ";

    output += `Sua soma é ${soma}, `;

    if( soma < 10 ) {
        output += `que é menor que 10.`;
    } else if(soma >= 10 && soma < 20) {
        output += `que é maior ou igual a 10 e menor que 20.`;
    } else {
        output += `que é maior ou igual 20.`;
    }
    
    console.log(`Input: ${x}, ${y}`);
    console.log(output);
}

compara(2, 2);
compara(8, 2);
compara(10, 15);