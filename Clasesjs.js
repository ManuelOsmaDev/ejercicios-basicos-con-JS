//crear una clase en JS

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
};

//creacion objeto llamando a constructor

let hombre = new Persona('Manuel','Sanchez', 19);
console.log(hombre)

let mujer = new Persona('milena','osma', 17)
console.log(mujer)

//get  y set para las clases
class Persona2{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
};

let hombre2 = new Persona('elias','osma',23)
hombre2.nombre = 'Elias'/// manda llamar set nombre('Elias')
console.log(hombre2.nombre)

//hoisting 
//no es posile crear objetos antes de declarar la clase 
// let carro = new carro = 'vovlo'

//heriencia en js

class PersonaE{

    static contadorObjetosPersonas = 0;

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get apellido(){
        return this._apellido
    }
    get nombre(){
        return this._nombre;
    }
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido +" "+ this.edad
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    set apellido(apellido){
        return this._apellido = apellido
    }
    toString(){
        //se aplica polimorfismo
        return this.nombreCompleto()
    }

    static saluda(){
        console.log('Hola! ')
    }
    static saluda1(PersonaE){
        console.log(PersonaE.nombre)
    }
};
//usar la vel metodo extends para heredar
class Empleado extends PersonaE{
    constructor(nombre,apellido ,edad,departamento){
        super(nombre,apellido,edad);
        this._departamento = departamento
    }
    get departamento(){
        return  this._departamento
    }

    set(departamento){
        return this.departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() +", " + this._departamento
    }

}


let hombreE  = new PersonaE('manuel','Osma',19)
console.log(hombreE)
//herada todo de la clase padre a la clase hija
let Empleado1 = new  Empleado('milena','osma',19,'programadora')

console.log(Empleado1)
Empleado1._departamento= 'Developer'
Empleado1.nombre = 'Manuel'
console.log(Empleado1.nombreCompleto())
console.log(Empleado1.toString())


PersonaE.saluda();
PersonaE.saluda1(Empleado1)
PersonaE.saluda1(Empleado1)

 PersonaE.contadorObjetosPersonas
console.log(PersonaE.contadorObjetosPersonas)


console.log(Empleado.contadorObjetosPersonas)








