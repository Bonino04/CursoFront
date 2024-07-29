class Persona{
    
    static contadorPersonas = 0;
    
    constructor(nombre, apellido, edad){
        this._id = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get id(){
        return this._id ;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad = edad;
    }

    toString(){
        return `${this._id} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad ,sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido,edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ' ' + this.idCliente + ' ' + this._fechaRegistro;
    }
}

//Prueba clase Persona
let persona1 = new Persona('Juan', 'Perez' ,28);
console.log(persona1.toString());

let persona2 = new Persona('Juan', 'Jose' ,20);
console.log(persona2.toString());

let empleado = new Empleado('Carla' ,'Gomez' ,'25' , 5000);
console.log(empleado.toString());
let empleado1 = new Empleado('Carla' ,'Torres' ,'27' , 50000);
console.log(empleado1.toString());

let cliente = new Cliente('Miguel', 'Cervantes', 30, new Date());
console.log(cliente.toString());