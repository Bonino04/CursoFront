// Ejemplo AND (&&), 
let a = 5;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de Rango");
}

//Ejemplo OR (||). regresa true si cualquier operando es true
let vacaciones = true, diaDescanso = false;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al del hijo")
}else{
    console.log("El padre esta ocupado")
}