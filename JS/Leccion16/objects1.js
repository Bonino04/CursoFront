//declarando Objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
persona.tel = '44332211';

//Concatenar cada valor de cada propiedad
console.log( persona.nombre + ' ' + persona.apellido);




//for in
for( nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona [nombrePropiedad]);
}

let personaArray = Object.values(persona);

console.log(personaArray)
