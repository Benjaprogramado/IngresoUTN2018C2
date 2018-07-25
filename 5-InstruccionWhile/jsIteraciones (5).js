function mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo= sexo.toLowerCase();

while (sexo != "f" && sexo !="m")

{
sexo = prompt("Dato incorrecto ingrese f ó m segun corresponda a su sexo");

sexo= sexo.toLowerCase();
}



document.getElementById("Sexo").value=sexo;

// variable= variable.toLowerCase() sirve para tomar por igual de válidos un ingreso en mayúscula o minúscula.

}//FIN DE LA FUNCIÓN