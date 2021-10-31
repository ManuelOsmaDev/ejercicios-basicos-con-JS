//funcion normal
function mifuncion(){
    console.log('hello world')
}

mifuncion();

///funcion flecha
// const mifuncion2 = () =>{
//     console.log('hola mundo')
// };

const funcion4 = () =>console.log('saludos desde aca');
// no aplica hosting para llamarla
funcion4()


const saludar = () => {
    return 'Hola Bienvenido'
}

console.log(saludar())


//regresar objeto funcion flecha 
let objeto = {
    nombre:'manuel',
    apellido:'sanchez'
}

const objet = () =>{
    return objeto
}

//funcion flecha con parametros 
console.log(objet())

const funcionParametro  = (mensaje) =>{
    console.log(mensaje)
}

funcionParametro('hola como estas');

//funcio varios parametros ejemplo suma

const suma = (a,b,c) => {
    let resultado = a+b/c
    return resultado
}
console.log(suma(2,4,6))





