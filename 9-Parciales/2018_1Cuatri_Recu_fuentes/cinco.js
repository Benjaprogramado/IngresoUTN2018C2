function mostrar()
{
var dia;

dia=prompt("Ingrese un dia de la semana:");
dia=dia.toLowerCase();

switch(dia){

    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        
    alert("A TRABAJAR!!!");
    break;

    case "sabado":
    case "domingo":

    alert("BUEN FINDE!!!");
    break;

    default:

    alert("ERROR, ingrese un día válido");
    break;
    





}
}
/*(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
