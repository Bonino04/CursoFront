class Persona{
    
    static contadorPersonas = 0;
    
    constructor( nombre, apellido, edad){
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
        return `
            ${this._id} 
            ${this._nombre} 
            ${this._apellido} 
            ${this._edad}`;
    }

}

let persona1 = new Persona('Juan', 'gomez', 28);
console.log(persona1);

