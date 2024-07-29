class Producto{

   static contadorProductos = 0;
    constructor(nombre, precio){
        this.id = ++ Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this.idProductos;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return this.idProducto + ' ' + this._nombre + ' ' + this._precio;
    }
}

let producto1 = new Producto('Pantalon' , 300);
console.log(producto1);

class Orden {
   
   static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
   constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get id(){
        return this.id;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("No se puede agregar mas productos")
        }

    
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio;
        }
        return totalVenta;
    }
    mostrarOden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this.idOrden} total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

        

}
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.mostrarOden();