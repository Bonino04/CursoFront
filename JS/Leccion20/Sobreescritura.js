class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }   

    obtenerDetalles(){
        return  this.nombre + ' ' + this.sueldo;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return this._departamento;
    }
}

let gerente1 = new Gerente('Carlos', 5000 , 'Sistemas');
console.log(gerente1.obtenerDetalles());