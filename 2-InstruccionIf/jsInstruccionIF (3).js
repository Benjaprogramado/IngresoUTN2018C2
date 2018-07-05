function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;
edad= parseInt(edad);

if (edad>=18)
{
    alert ("Es mayor de edad")
}
else

{
    alert ("Es menor de Edad")
}



}//FIN DE LA FUNCIÓN

/*Al existir dos opciones posibles (es mayor o menor) no tiene sentido y esta mal visto utilizar 
dos veces la funcion "if", directamente utilizamos "else" (sino) que es mas abreviada y acertada para
el caso*/
