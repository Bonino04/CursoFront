/*Ejemplos de tipos de datos en JavaScript*/
//Tipo de dato String

var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "55443322"
}

console.log(typeof objeto);

//Tipo de dato boolean (true , false)

var bandera = true;
console.log(typeof bandera);

//Tipo de dato function
function MiFuncion(){

}
console.log(typeof MiFuncion);

//Tipo de dato Symbol
var simbolo = Symbol();
console.log(typeof simbolo);

//Tipo clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//tipo undefined

var x;
console.log(typeof x);

x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Aud', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);





