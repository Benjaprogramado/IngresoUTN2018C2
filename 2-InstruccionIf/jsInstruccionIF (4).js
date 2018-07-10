function mostrar()
{
//tomo la edad  

var edad;

edad= document.getElementById("edad").value;
edad= parseInt(edad);

//Opcion con "and", se debe cumplir el rango especificado y devuelve el alert indicado para la funciòn if.

//if (edad >=13 && edad<=17) 


//Opcion con "not", si se cumple lo especificado, se niega, entonces lo invierte y da verdadero.

if (!(edad<13 || edad>17))



{

alert ("Es Adolecente")

}
    

//Opcion con "not", si se cumple lo especificado, se niega, entonces lo invierte.

//if (!(edad<13 || edad>17))



}
//FIN DE LA FUNCIÓN