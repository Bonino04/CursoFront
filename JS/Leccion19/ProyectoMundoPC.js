class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
    crearDispositivoEntrada(){

    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return  this._idRaton + ' ' +  this._tipoEntrada + ' ' + this._marca;
    }
}
let raton1 = new Raton('USB' , 'HP');
console.log(raton1.toString());


class Teclado extends DispositivoEntrada{
    
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return this._idTeclado + ' ' + this._tipoEntrada + ' ' + this._marca;
    }


}

let teclado1 = new Teclado('Bluetooth' ,'HP');
console.log(teclado1.toString());

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor ;
    }
    toString(){
       return  this._idMonitor + ' ' + this._marca + ' ' + this._tamaño;
    }

}
let monitor1 = new Monitor( 'HP', 15);
let monitor2 = new Monitor( 'DELL', 19);
console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadoras = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadoras(){
        return this._idComputadoras ;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        return this._monitor = monitor;
    }
    get teclado(){
        return this._teclado ;
    }
    set teclado(teclado){
        return this._teclado = teclado;
    }
    get raton(){
        return this._raton = raton;
    }
    set raton(raton){
        return this._raton = raton;;
    }
    toString(){
        return this._idComputadoras + ' ' + this._nombre + ' ' + this._monitor + ' ' + this._teclado + ' ' + this._raton;
    }
}
let computadora1 = new Computadora('HP' ,monitor1, raton1, teclado1);
console.log(computadora1.toString());

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._idComputadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(){
        this._idComputadoras.push(computadora);
    }
    mostrarOden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += computadora;
        }
    }

}
