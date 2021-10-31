///promesas JS

let mipromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver('Problema Resuelto')
    }else{
        rechazar('Hay un problema')
    }
}
);

// mipromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error))


let promesa = new Promise((resolver)=>{
    // setTimeout(()=>resolver('saludo con promise y timeo'),3000)
});

// promesa.then(valor => console.log(valor));

///async indica cuando una funcion regresa

async function mifuncionP(){
    return 'saludos con promesa y async'
}

// mifuncionP().then(valor=>console.log(valor))

//async/await

async function funcionAwait(){
    let mipromesa = new Promise(resolver=>{
        resolver ('promesa con await')
    })
    console.log(await promesa)
}
// 
// funcionAwait();


// promesas async await

async function funcionPromesaA(){
    let mipromesa = new Promise(resolver =>{
    setTimeout(()=>resolver('promesa con await'),3000)    
    });
    console.log(await mipromesa);
}


funcionPromesaA





