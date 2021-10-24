//declaracion de la funcion

function mifuncion(a,b){
    return a + b;
}
//llamando a la funcion

let resultado = mifuncion(3,4);
console.log(resultado)

//funciones de tipo exprecion

let x = function(a,b){
    console.log(arguments.length)
   return a + b
}
resultado = x(1,4)
console.log(resultado)


//funciones como flechas

const sumarfunction = (a,b) => a+b
rst = sumarfunction(2,1)
console.log(rst)

//acceder a elementos

let sumar = function(a=3,b=1,c=1){
    console.log(arguments[1])
    console.log(arguments[2])
    return a+b+c
}

resul = sumar(4,3,4)
console.log(resul)

//ejemplo sumar con function

let resultados = sumartodo(2,6,12,10,9,20,10,20,10231);

function sumartodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i]
    }
    return suma
}
console.log(resultados)

//paso por valor paso por referencia
//tipos primitivos

let z = 10;
function cambiarvalor(a){
    a=20;
}
//paso por valor
cambiarvalor(z)

console.log(z)


//paso por referencia

const persona ={
    nombre:'manuel',
    apellido:'osma'
}

function cambiarvalorobjeto (p1){
    p1.nombre = 'Jose';
    p1.apellido = 'Sanchez'
}

cambiarvalorobjeto(persona)
console.log(persona)















































