let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo error');
});

//*miPromesa.then(
   // valor => console.log(valor),
  //  error => console.log(error));


  let promes = new Promise((resolver) => {
    setTimeout( ()=> resolver('saludos con promesa y timeout'), 3000);
   // console.log('fin promesa');
  })

 // miPromesa.then(valor => console.log(valor));

 //async indica que una funcion regresa una promesa
 async function miFuncion(){
    return 'saludos con promesa y async';
 }

 miFuncion().then(valor => console.log(valor));