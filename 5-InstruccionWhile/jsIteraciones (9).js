function mostrar()
{

	var maximo;
	var minimo;
	var respuesta;
	var flag=0;
	//var contador=0;

	do {
		numero=parseInt(prompt("Ingrese un número"));
		//contador++

		/*if (contador==1){
			maximo=numero;
			minimo=numero;
		}*/
		
		if (numero<minimo || flag==0){
			minimo=numero;
		}
		if (numero>maximo || flag==0){
			maximo=numero;

			flag=1
	
		}

		respuesta=prompt("Desea continuar");

	} while (respuesta=="si");

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;


//Ver opcion con flag en la foto del celu.

}//FIN DE LA FUNCIÓN