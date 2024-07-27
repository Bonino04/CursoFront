function miFuncion(a, b, c){
    console.log(arguments.length);
    return a + b + c;
}

let resultado = miFuncion(1, 2, 3);
console.log(resultado);