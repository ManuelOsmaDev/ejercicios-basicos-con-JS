class Persona {

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._idpersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idpersona (){
        return this._idpersona
    }
    get nombre(){
        return _this.nombre
    }
    set nombre(nombre){
     this._nombre = nombre 
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
     this._apellido = apellido
    }
    get edad(){
        return this._edad
    }
    set edad(edad){
     this._edad = edad;
    }
    toString(){
        return `${this._idpersona}
                ${this._apellido}
                ${this._nombre}
                ${this._edad}`
    }
}

//clase hija de persona

class Empleado extends Persona{
    static contadorEmpleados = 0;    
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this._idEmpleado
    }
    get(){
        return this._sueldo
    }
    set(sueldo){
        this._sueldo = sueldo
    }
    toString(){
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`
    }
}

///cliente clase hija de persona

class cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idcliente = ++cliente.contadorClientes
        this._fechaRegistro = fechaRegistro;
    }
    get idcliente (){
        return this._cliente
    }

    get fechaRegistro (){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }

    toString(){
        return `${super.toString()}
                ${this._idcliente}
                ${this._fechaRegistro}`    }


}

///prueba de la clase Persona


let Persona1 = new Persona('maria', 'hernandez',29)
console.log(Persona1.toString())
 let Persona2 = new Persona('esteban','sanchez',23)
 console.log(Persona2.toString())


 //prueba de la clase empleado
let empleado1 = new Empleado('milena','sanchez',25,5000)
console.log(empleado1.toString())
let empleado2 = new Empleado('manuel','sanchez',25,8000)
console.log(empleado2.toString())


//prueba clase cliente

let cliente1 = new cliente('dayana','ortuha',19, new Date())
console.log(cliente1.toString())
let cliente2 = new cliente('sherman','ortuha',28, new Date())
console.log(cliente2.toString())


let cliente3 = new cliente('deison','gonzales',20,new Date())
console.log(cliente3.toString())


let empleado3 = new Empleado('deison','gonzales',1000000)
console.log(empleado3.toString())














