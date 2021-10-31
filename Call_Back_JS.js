function miFuncion (){
    console.log('jola')
}

function mifuncion2(){
    console.log('como estas')
}

miFuncion();
mifuncion2();

///funcion de tip call-back

function imprimir (mensaje){
    console.log(mensaje)
}


function suma(a,m,funCallback){
    let res = a+m
    funCallback(res)
}

suma(5,3,imprimir);

//llamadas asincronas con uso de setTimeout

function MiCallback(){
    console.log('saludo despues de 3 segundos')
}

setTimeout(MiCallback,3000);

setTimeout(function(){console.log('saludo 2')},2000);



setTimeout(()=>console.log('saludo 3'),1000);

//funcion seinterval

let reloj= ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,2000)//cada segundo
