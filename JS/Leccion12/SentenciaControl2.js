let mes = 1;
let estacion;

if( mes == 1 | mes == 2 || mes == 12 ){
    estacion = "invierno";
}
else if( mes == 3 | mes == 4 || mes == 5){
    console.log("Primavera")
}
else if( mes == 6 | mes == 7 || mes == 8){
    console.log("Otoño");
}
else if( mes == 9 | mes == 10 || mes == 11){
    console.log("Verano");
}else{
    console.log("Opcion Incorrecta");
}