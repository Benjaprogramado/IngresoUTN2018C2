/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

var precio =35;
var precioFinal;
var descuento;
var marca = document.getElementById("Marca").value;
var cantidad = parseInt(document.getElementById("Cantidad").value);


switch (cantidad) {

    case 1:
    case 2:
    descuento=0
    break;

    case 3:
      if (marca=="ArgentinaLuz"){
          descuento=15;    
      }
      else if(marca=="FelipeLamparas"){
          descuento=10;

      }
      else{
          descuento=5;
      }
    break;

    case 4:
      if (marca =="ArgentinaLuz" || marca == "FelipeLamparas"){
          descuento = 25;

      }
      else{
          descuento = 20;
      }
    break;

    case 5:
      if (marca=="ArgentinaLuz"){

          descuento = 40;

      }
      else {
          descuento= 30;
      }
      break;

      default:
      descuento=50;

      break;
}

precioFinal = (precio*cantidad)-[(precio*cantidad*descuento)/100];

if(precioFinal >120){

    iibb= (precioFinal*10)/100;
    precioFinal= precioFinal+iibb;
    document.getElementById("precioDescuento").value=precioFinal;
    alert ("Usted esta pagando "+iibb+" pesos en concepto de IIBB");

} 
else{

    precioFinal=precioFinal;
    document.getElementById("precioDescuento").value=precioFinal;

}




















}
