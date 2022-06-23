function validaArray(arr, num) {
    try {

        if(!arr) {
            throw new ReferenceError("Envie o primeiro parâmetro arr!");
        }
    
        if(!num) {
            throw new ReferenceError("Envie o segundo parâmetro num!");
        }
    
        if(typeof(arr) !== 'object') {
            throw new TypeError("O parâmetro arr necessariamente deve ser do tipo object!");
        }
    
        if(typeof(num) !== 'number') {
            throw new TypeError("O parâmetro num necessariamente deve ser do tipo number!");
        }
        
        if(arr.length !== num) {
            throw new RangeError("O tamanho o parâmetro arr difere do valor enviado no parâmetro num!");
        }

        return arr;

    } catch (error) {

        if(error instanceof ReferenceError) {
        
            console.log("Erro do tipo ReferenceError...");
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
        
        } else if(error instanceof TypeError) {

            console.log("Erro do tipo TypeError...");
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);

        }else if(error instanceof RangeError) {

            console.log("Erro do tipo RangeError...");
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
            
        }else {

            console.log("Erro não tratado...");
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
            
        }
    }
}

const meuArray = [1, 2];
const meuNum = 2;

console.log(validaArray(meuArray, meuNum));