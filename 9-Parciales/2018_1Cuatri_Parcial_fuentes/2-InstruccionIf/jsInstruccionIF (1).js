function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;
edad=parseInt(edad);

if (edad == 15)
{
    alert ("Niña Bonita")
}

}//FIN DE LA FUNCIÓN

/*Cuando utilizamos "=" le asignamos valor a un objeto, con doble "==" nos referimos a una comparación
como en este caso, y si utilizamos triple igual "==="(en java) la igualdad comparada es completa, es decir,
en este caso tanto el dato 15 como su formato (string, number, etc) deberia ser idéntico.*/
 