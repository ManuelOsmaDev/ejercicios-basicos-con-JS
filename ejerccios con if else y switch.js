let numero = 3


if(numero ==1){
    console.log('numero 1')
}else if(numero==2){
    console.log('numero 2')
}else if(numero==3){
    console.log('numero 3')
}else if(numero =4){
    console.log('numero 4')
}else {
    console.log('numero desconocido')
}

//estacion de annio

let mes = 12
let estacion;

if(mes == 1 || mes == 2 || mes== 12){
    console.log('invierno')
}else if(mes == 3 || mes==4 ||mes ==5 ){
    console.log('primavera')
}else if(mes == 6 ||mes==7 || mes==8){
    console.log('verano')
}else if(mes == 9 || mes == 10 || mes == 11){
    console.log('otoño')
}else{
    console.log('valor incorrecta')
}

//calculo de hora con if else
let hora = 1
let mensaje


if(hora >=6 && hora <=11){
    mensaje = 'buenos dias'
}else if(hora >=12 && hora <=18){
    mensaje = 'buenas tardes'
}else if(hora >= 19 && hora<=24){
    mensaje= 'buenas noches'
}else if(hora >=0 && hora <6){
    mensaje ='durmiendo'
}else{
    mensaje= 'incorrecto'
}


console.log(mensaje)


//ejercicio basico con switch

let numero1 =2

let numerotexto = 'valor desconocido'

switch(numero1){
    case 1:
        numerotexto='numero 1'
        break
    case 2:
        numerotexto='numero 2'
        break
    case 3:
        numerotexto='numero 3'
        break
    case 4:
        numerotexto='numero 4'
        break
    default:
        numerotexto='caso no encontrado'
}

//estaciones del annio con switch


let mesA =12
let estaciones = 'estacion desconocida'
console.log(numerotexto)

switch (mesA) {
    case 12: case 1: case 2:
        estaciones = 'INVIERNO'    
        break;
    case 3: case 4: case 5:
        estaciones= 'PRIMAVERA'
        break;
    case 6: case 7: case 8:
        estaciones='VERANO'
        break;
    case 9 : case 10: case 11:
        estaciones="OTOÑO"
        break;
    default:
        estaciones= 'mes no valido'
        break;
}
console.log(estaciones)


