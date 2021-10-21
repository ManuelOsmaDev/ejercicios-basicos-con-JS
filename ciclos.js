//ciclo while

let contador = 0;

while(contador< 5){
    console.log(contador);
    contador++;
}
//ejercicio con while buscar solo los numeros pares

let c =0
while (c<=10){
    c++
    if(c%2==0){
        console.log(c)
    }
}

console.log('fin ciclo')

//ciclo do while
let count = 0
do{
    console.log(count);
    count++;
}while(count < 5 );

console.log('fin ciclo do while');

//ciclo for 

for (let counter = 0; counter <5 ; counter++) {
    console.log(counter)
}

console.log('fin ciclo for');

//break sirve para romper un ciclo


for(i=0; i<=10; i++ ){if(i % 2 ==0){
    console.log(i);
    break;
}
}
console.log('fin ciclo for con break')

//palabra continue in js 
inicio:
for(let cu = 0; cu<=10; cu++){
    if( cu % 2!==0 ){
        continue inicio;//ir a la siguiente iteracion
    }
   console.log(cu)
}

//etiquetas
 
inicio:
for(let cu = 0; cu<=10; cu++){
    if( cu % 2!==0 ){
        continue inicio;//ir a la siguiente iteracion
    }
   console.log(cu)
}