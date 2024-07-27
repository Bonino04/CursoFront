let mes = 14;

let estaciones;
//
switch( mes){
    case 1 : case 2: case 12:
        estaciones = 'invierno';
        break;
    case 3: case 4: case 5:
        estaciones = 'primavera';
        break;
    case 6: case 7: case 8:
        estaciones = 'verano';
        break;
    case 9: case 10: case 11:
        estaciones = 'otoño';
        break;
    default:
        estaciones = 'estacion desconocido';


}
console.log(estaciones);