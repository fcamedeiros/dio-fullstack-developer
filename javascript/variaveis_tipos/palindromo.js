/*
Palavras escritas de frente para trás e de trás 
para frente que possuem o mesmo significado
são chamadas de palíndromo
*/
function verificaPalindromo(string) {
    if(!string) return "string inválida!";

    return string.split("").reverse().join("") === string;
}

function verificaPalindromo2(string) {
    if(!string) return "string inválida!";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("aba"));