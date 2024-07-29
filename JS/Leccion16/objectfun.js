//Funcion constructor de objetos de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@email.com');
console.log(padre);