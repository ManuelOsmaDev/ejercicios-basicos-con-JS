// sintacis vieja let autos = new Array('bmw','mercedez','volvo');

//arrays
const autos = ['bmw','mercedez','volvo'];
console.log(autos)

//acceder a los elementos

console.log(autos[2])
console.log(autos[1])

//recorrer arrays con ciclo for

for(i=0; i<autos.length; i++){
    console.log(i +':' + autos[i])
}
//modificar un Arrays y agregar

autos[1] = 'MercedezBenz'
console.log(autos[1])

//agregar elemento
autos.push('lamborgini','lambo');
console.log(autos);


console.log(autos.length)

autos[autos.length] = 'cadillac'
console.log(autos)

autos[6] = 'porshe'
console.log(autos)

//preguntar si es un array
console.log(typeof autos)//no funciona bien

console.log(Array.isArray(autos))//version de ecmascript
console.log(autos instanceof Array)

