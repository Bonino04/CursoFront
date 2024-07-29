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
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto())

let persona2 = new Object();

persona2.nombre = 'Carlos';
persona2.apellido = 'Perez';
persona2.tel = '55443322';
persona2.direccion = 'Saturno 15';
console.log(persona2);