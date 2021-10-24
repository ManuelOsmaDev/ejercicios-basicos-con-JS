let x = 20;

console.log(x.length)

//objetos

let persona= {
    nombre:'manuel',
    apellido:'sanchez',
    edad:19,
    telefono:3132959599,
    get nombreCompleto(){
        return this.apellido+' '+ this.nombre
    },
    edadtelefono:function(){
        return this.edad +' '+this.telefono
    }
}
console.log(persona.edadtelefono())
console.log(persona.nombreCompleto)
console.log(persona.nombre,persona.apellido,persona.edad,persona.telefono)

//creacion de objetos con new object
let persona2 = new Object();

persona2.nombre = 'esteban'
persona2.apellido = 'sanchez'
persona2.direccion = 'kr 21 g 76 sur 88'
persona2.telefono = 3132028292

console.log(persona2)

console.log(persona2['apellido'])

// for in

for(propiedad in persona2){
    console.log(propiedad)
    console.log(persona2[propiedad])
}

persona2.telefono = 328989762;

console.log(persona2)
///borrar un elemento

delete persona2.telefono;


console.log(persona2)

//concatenar cada valor de cada propiedad para imprimir


console.log(persona2.nombre, + persona2.apellido)


for(nombrepersona in persona2){
    console.log(persona2[nombrepersona])
}

let persona2array = Object.values(persona2);


console.log(persona2array)

let persona2string = JSON.stringify(persona2)


console.log(persona2string)


///metodo get

let  carro = {
    modelo:'volvo',
    annio:98,
    pais:'es',
    get lang(){
        return this.pais.toUpperCase();
    },//metodo set
    set lang(lang){
        this.pais = lang.toUpperCase();
    },
    get carro (){
        return this.modelo + this.annio
    }
}

//metodo set

console.log(carro.lang)

carro.lang = 'japon';

console.log(carro.lang)

//metodo constructor de objetos



function ciclas(color,precio,tipo,persona){
    this.color = color;
    this.precio = precio;
    this.tipo = tipo;
    this.persona = persona;
    this.nombretipo = function(){
        return this.persona + ' ' + this.tipo
    }
}



ciclas.prototype.color = 'azulMarino'



let deportiva = new ciclas('verde',400,'neaker','eliecer');

console.log(deportiva)
let otra = new ciclas('amarillo',300,'monareta','duvan',)
console.log(otra)

deportiva.color = 'naranja'
deportiva.persona = 'andres';
console.log(deportiva)


console.log(deportiva.color)

//las formas mas facil de escribir

let miCicla = new Object();
//forma mas facil y formal
let micicla2 = {};

let micadena = new String('hola');
//mas facil y formal
let micadena1 = 'hola.';

let miarreglo = new Array();
//mas facil y formal
let miarreglo2 = [];

let mifuncion = new Function();
//mas facil mas formal
let mifuncion1 = function(){}








































