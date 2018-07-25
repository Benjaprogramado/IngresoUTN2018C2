function mostrar()
{

	var contador=1;
	var acumulador=0;
	var numero;
	 
	while (contador <=5) {
		numero= parseInt(prompt ("Ingrese un número "));

		acumulador= acumulador+numero

		contador= contador +1
	
	} 



document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN