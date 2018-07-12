function mostrar()
{
//tomo la edad  
/*var mesDelAño = document.getElementById("mes").value;

switch (mesDelAño){

    

    case "Enero":
    alert ("Todavia falta para el invierno");
    break
    case "Febrero":
    alert ("Todavia falta para el invierno");
    break
    case "Marzo":
    alert ("Todavia falta para el invierno");
    break
    case "Abril":
    alert ("Todavia falta para el invierno");
    break
    case "Mayo":
    alert ("Todavia falta para el invierno");
    break
    case "Junio":
    alert ("Todavia falta para el invierno");
    break
    case "Julio":
    alert ("Abrigate hace frio");
    break
    case "Agosto":
    alert ("Abrigate hace frio");
    break
    default: 
    alert ("Ya pasamos el frio, ahora el calor");
    break
  */



  //Otra resoluciòn mas óptima y reducida sería:

var mesDelAño = document.getElementById("mes").value;

switch (mesDelAño){

    

    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert ("Todavia falta para el invierno");
    break
    case "Julio":
    case "Agosto":
    alert ("Abrigate hace frio");
    break
    default: 
    alert ("Ya pasamos el frio, ahora el calor");
    break
  
}




}//FIN DE LA FUNCIÓN