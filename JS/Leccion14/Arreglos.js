//let autos = new Array('BMW','MERCEDES BENZ','Volvo');

const autos = ['BMW','FIAT','VOLVO'];
console.log(autos);

//Llamar arreglo por separado
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log( autos[i]);
}

// Modificar elemento del arreglo
autos[1] = 'FIT';
console.log(autos[1]);

//Agrega elementos al arreglo
autos.push('Audi');
console.log(autos);

//Cantidad de indice
console.log(autos.length);

//Agregar nuevo elemento en el indice 4
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);
//Tipo de variable
console.log(typeof autos);

//Verificar si es un array
console.log(Array.isArray(autos));