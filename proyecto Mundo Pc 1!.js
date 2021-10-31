class DispositivoEntrada{
    constructor(tipoentrada,marca){
        this._tipo_entrada = tipoentrada
        this._marca = marca
    }

    get tipoentrada(){
       return this._tipo_entrada
    }
    set tipoentrada (tiposentrada){
        this._tipo_entrada = tiposentrada
    }
    get tipoentrada (){
        return this._marca
    }
    set marca (marca){
        this._marca = marca
    }
}

class raton extends DispositivoEntrada{ 
    static ContadorRatones = 0;

    constructor(tipoentrada,marca){
        super(tipoentrada,marca)
        this._idraton = ++raton.ContadorRatones
    }
    get idraton (){
        return this._idraton
    }
    toString(){
        return `Raton:${this._idraton}
               TipEntrada:${this._tipo_entrada}
               Marca:${this._marca}`
    }
}

let mouse = new raton('usb','hp')

class teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoentrada,marca){
        super(tipoentrada,marca)
        this._idTeclado = ++teclado.contadorTeclados
    }
    get idTeclado (){
        return this._idTeclado
    }
    toString(){
        return `${this._idTeclado}
                ${this._tipo_entrada}
                ${this._marca}`
    }
}


let keyboard = new teclado('hp','Usb')
console.log(keyboard.toString())

let keyboard2 = new teclado('gamer','usb')
console.log(keyboard2.toString())


class Monitor{
    static contadorMonitores = 0

    constructor(marca,tamano){
        this._Idmonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamano = tamano
    }
    get tamano(){
        return this._tamano
    }
    get Idmonitor(){
        return this._Idmonitor
    }
    toString(){
        return `Monitor: ${this.Idmonitor}
                Marca: ${this._marca}
                Tamano: ${this.tamano}`
    }

}


let Monitor1 = new Monitor('Sonic','300x500')
let Monitor2 = new Monitor('dell','400x300')
console.log(Monitor1.toString())
console.log(Monitor2.toString())



class PC{
    static contadorPc = 0

    constructor(nombre,Monitor,raton,teclado){
        this._idPc = ++PC.contadorPc
        this._nombre = nombre
        this._monitor = Monitor
        this._raton = raton
        this._teclado = teclado
    }
    toString(){
      return  `PC:${this._idPc}
               Nombre: ${this._nombre}
               Monitor: ${this._monitor} 
               Raton: ${this._raton}
               Teclado : ${this._teclado}`
    }
} 


let PC1 = new PC('DELL',Monitor1,mouse,keyboard)
console.log(PC1.toString())

class orden{
    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++orden.contadorOrden
        this._Pc = []
    }
    get idOrden(){
        return this._idOrden
    }

    agregarPc(PC){
        this._Pc.push(PC);
    }
    mostrarOrden(){
        let PcOrden = '';
        for(let PC of this._Pc){
            PcOrden += `${PC}`
        }
        console.log(`Numero_Orden ${this.idOrden},${PcOrden}`)
    }
}


let Orden1 = new orden()
Orden1.agregarPc(PC1)
Orden1.agregarPc(PC1)
Orden1.mostrarOrden()