class Producto{
    static contadorProducto = 0;

    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProducto;
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    toString(){
        return `Id:${this.idProducto} 
                Nombre:${this._nombre}
                Precio:${this._precio}`
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden
        this._idProductos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden (){
        this._idOrden
    }
    agregarProducto(Producto){
        if(this._idProductos.length< Orden.MAX_PRODUCTOS){
            this._idProductos.push(Producto);
        }else{
            console.log('imposible aregar mas producto')
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let Producto of this._Productos){
            totalVenta += Producto.precio;
        }
        return totalVenta
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let Producto of this._idProductos){
            productosOrden += Producto.toString() + ' ';
        }
        console.log(`orden: ${this._idOrden} total: ${this.calcularTotal}, productos:${productosOrden}`)
    }
}


let producto1 = new Producto('camisa',3000)
let producto2 = new Producto('pantalon',3000)

let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
console.log(orden1)

let orden2 = new Orden()
orden2.agregarProducto(producto2)

