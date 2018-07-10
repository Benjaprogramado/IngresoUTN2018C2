function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;
edad =parseInt(edad);

if (edad<13)
{
    alert ("Es Niño")
} 

else if (edad >=13 && edad<=17)
{
    alert ("Es Adolecente")
}

else
{
    alert ("Es Adulto")
}


/*Otra opciòn seria esta:

if (edad<13)
{
    alert ("Es Niño")
} 

else if (edad<=17)
{
    alert ("Es Adolecente")
}

else
{
    alert ("Es Adulto")
}       

Tener en cuenta que al utilizar "else", si la situciòn que antecede se cumple el resto no se lee.
También considerar que se puede jugar con las condiciones como en este último ejemplo, ya que sino es menor, entonces
deja de ser necesario delimitar el rango adolecente y basta con decir menor a 17 o en su defecto será adulto.
De esta forma encontraremos múltiples formas de resolver un mismo ejercicio, por eso hay que 
"RAZONAR DETENIDAMENTE CADA CASO".
*/

}//FIN DE LA FUNCIÓN