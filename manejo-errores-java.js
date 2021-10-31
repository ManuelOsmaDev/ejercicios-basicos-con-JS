'use strict'



//metodo try and throw
try{
   //let=2 ;
    throw 'mi error';
}catch(error){
    console.log(error)
}finally{
    console.log('termino de revicion')
}

console.log('continuamos')

//

let resultado  = 'hola';

try {
    if(isNaN(resultado)) throw'no es un numero';
    else if(resultado === ' ') throw'es cadena vacia';
    else if(resultado >= 0) throw 'valor positivo';
    else if(resultado <= 0) throw 'valor negativo'
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.mensaje);
}
