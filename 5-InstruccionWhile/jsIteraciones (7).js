function mostrar()
{

	var contador=1;
	var acumulador=0;
	var respuesta= "si";


	while (respuesta =="si"){

		numero=parseInt(prompt("Ingrese un número"));
		acumulador= acumulador + numero;
		contador= contador + 1;
		respuesta= prompt ("Escriba si para ingresar otro número, o presione enter para ver el resultado");



	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN/