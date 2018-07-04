/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;

sueldo= document.getElementById("sueldo").value;
sueldo= parseInt(sueldo);

document.getElementById("resultado").value = (sueldo*1.1).toFixed(2);

/*la operacion toFixed(2) la agrego el profesor a modo de limitar los decimales 
a dos unicamente. Si esto no se hacia por una cuestion del lenguaje propiamente, 
el resultado arrojaba muchos decimales y valores incoherentes al final de los mismos.
otra alternativa para resolverlo era hacer toda la operacion de la regla de tres parallegar al resultado*/


	
}
