function mostrar()
{

var precio=parseInt(prompt("Ingrese un precio"));
var descuento=parseInt(prompt("Ingrese el descuento deseado"));
var precioFinal=precio-[(precio*descuento)/100];

document.getElementById("elPrecioFinal").value=precioFinal;




}
