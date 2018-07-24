function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;

switch (mesDelAño) {

    case "Febrero":
    alert ("Este mes tiene 28 días");
    break
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert ("Este mes tiene 30 días");
    break
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    alert ("Este mes tiene 31 días");
    break



}



/*
Meses de 28 días: 
Febrero tiene 28 salvo en los años bisiestos que tiene 29 días. 

Meses de 30 días: 
Abril, junio, septiembre y noviembre. 

Meses de 31 días: 
Enero, marzo, mayo, julio, agosto, octubre y diciembre. */


	
	



}//FIN DE LA FUNCIÓN