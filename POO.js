///sobre escritura con JS
class empleado {
    constructor(nombre,sueldo){
        this._nombre = nombre
        this._sueldo = sueldo
    }
    obtenerDetalles(){
        return `empleado: ${this._nombre} sueldo: ${this._sueldo}`
    }
}

class Gerente extends empleado {
    constructor(departamento,nombre,sueldo){
        super(nombre,sueldo)
        this._departamento = departamento
    }
    //tilizar la palabra super
    obtenerDetalles(){
        return `${super.obtenerDetalles()} ${this._departamento}`
    }
}
//polimorfismo
function imprimir(imPr){
    return console.log(imPr.obtenerDetalles())
}



 
let gerente1  = new Gerente('sistemas','elias','500')
console.log(gerente1.obtenerDetalles())
imprimir(gerente1); 







