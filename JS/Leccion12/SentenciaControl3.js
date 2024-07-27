let horaDia = 4;
let mensaje;

if( horaDia >= 6 && horaDia <= 11 ){
    console.log("Buenos Dias");
}else if( horaDia >=12 && horaDia <= 18){
    console.log("Buenas Tardes");
}else if( horaDia >= 19 && horaDia <= 23){
    console.log("Buenas Noches");
}else if( horaDia >= 0 && horaDia <= 6){
    console.log("Durmiendo");
}else{
    console.log("Opcion Incorrecta");
}