//metodo call en javascript

let persona = {
    nombre:'esteban',
    apellido:'osma',
    nombreCompleto:function(titulo,annio){
        return titulo + this.nombre+' '+this.apellido + ' ' + annio
    }
}

let persona1 = {
    nombre:'manuel',
    apellido:'sanchez'
}

let persona2 = {
    nombre:'milena',
    apellido:'sanchez'
}

//uso de call usar nombre completo en el objeto persona para usarlo en persona1

console.log(persona.nombreCompleto.call(persona1,'bachiller',2020))
console.log(persona.nombreCompleto.call(persona2))

console.log(persona.nombreCompleto())

//metodo aply
console.log(persona.nombreCompleto('lic.', '2090'))


let arreglo = ['ing. ', 2021]
console.log(persona.nombreCompleto.apply(persona1, arreglo))
