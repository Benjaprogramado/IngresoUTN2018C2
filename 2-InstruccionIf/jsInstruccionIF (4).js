function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;
edad= parseInt(edad);

//opcion con "and"

//if (edad>=13 && edad<=17);

//Opcion con "not"

if (!(edad<13 || edad>17));

{
    alert ("Es Adolecente")
}


}//FIN DE LA FUNCIÓN