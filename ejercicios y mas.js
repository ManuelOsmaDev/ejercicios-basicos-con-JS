let a = 12
if(a%2 == 0) console.log('es numero par')
else{  console.log('no es numero par')
}


let edad = 17, adulto =18
if(edad>=adulto){
    console.log('es un adulto')
}else{
    console.log('es menor de edad')
}

//ejemplo de and solo si ambos operandos son true o false
let a =10

let vamin = 0, vamax=10

if(a >= vamin && a<=vamax){
    console.log('esta dentro del rango')
}else{
    console.log('no esta dentro de rango')
}
//ejemplo or si alguno es falso puede ser verdaro

let vacaciones  = false  , diaDescanso = true

if(vacaciones || diaDescanso){
    console.log('puede asistir al juego del hijo')
}else{
    console.log('el padre esta ocupado')
}
//operador ternario 

let resultado = (1>2) ? "verdadero" : 0

console.log(resultado)

let numero = 2

let rst = (numero %2 === 0) ? 'es par': 'es impar'

console.log(rst)


///conversion string a number//////////////////////////

let minumero = '18'

//console.log(typeof minumero)


let edades = Number(minumero);
console.log(edades)

if(isNaN(edades)){
    console.log('no es un numero')
}else{
    if(edades>=18){
        console.log('puede votar')
    }else{
        console.log('eres menor de edad')
    }
}

///////////////////////////////////////

if(edades>=18){
    console.log('puede votar')
}else{
    console.log('eres menor de edad')
}
//ejercicio puede votar en operador ternario

let respuesta2 = edades>=18 ? 'puede votar':'usted es menor edad aun';
console.log(respuesta2)

//verificar que una variable sea numero
















