//Declarar Funcion
//Cantidad de elementos de la funcion length
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

//Llamando a la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declarando Funcion de tipo Expresion
let suma = function(a, b){
    return a + b;
}
resultado = suma(1, 2);
console.log(resultado);

//Funcion no es utilizable
(function (){
    console.log('Ejecutando la funcion');
})();

console.log(typeof miFuncion);

//Cambiar la funcion a texto
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

