let miNumero = " 18" ;


let edad = Number(miNumero);
console.log(edad);

if( isNaN(edad)){
    console.log("No es un numero");

}else{
    if(edad >= 18){
    console.log("Puede votar");
    }else{
    console.log("No puede votar");
}

}

let resultado = (edad >= 18) ? "Puede votar " : "Muy joven para votar";
console.log(resultado);