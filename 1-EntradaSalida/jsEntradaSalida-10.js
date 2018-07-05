/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

var importe;
var descuento;
var porcentaje;

importe= document.getElementById("importe").value;
//importe= parseInt(importe);

porcentaje= importe * 0.25;
//porcentaje=parseInt(porcentaje);

descuento= importe-porcentaje;
//descuento=parseInt(descuento);

document.getElementById("resultado").value= descuento  


	
}
