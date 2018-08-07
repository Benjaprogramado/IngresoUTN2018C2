function mostrar()
{

importeOriginal=parseInt(prompt("Ingrese un precio:"));
porcentaje=parseInt(prompt("Ingrese un porcentaje de descuento:"));

descuento=(importeOriginal*porcentaje)/100;
precioConDescuento=importeOriginal-descuento;
iva=(precioConDescuento*21)/100;
importeFinal=precioConDescuento+iva;
alert("El descuento es de $"+descuento +"\nEl precio con descuento es $"+precioConDescuento+"\nEl IVA es de $"+iva)
document.getElementById("elPrecioFinal").value=importeFinal;
}


/*Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/