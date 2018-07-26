function mostrar()
{
//Tener en cuenta que si inicializo la variable negativo con 0 entonces todas las multiplicaciones me darian 0.

	var positivo=0;
	var negativo=1;
	var contador=0;
	var respuesta="si";


	while (respuesta =="si"){

		numero=parseInt(prompt("Ingrese un número"));

		if (numero<0) {
		negativo= negativo*numero;
		contador=contador+1;
		
		respuesta= prompt ("Escriba si para ingresar otro número, o presione enter para ver el resultado");
	
		}

		else  {
        positivo=positivo+numero

		respuesta= prompt ("Escriba si para ingresar otro número, o presione enter para ver el resultado");

		
		}


	}
document.getElementById('suma').value=positivo;

if (contador==0){
	negativo=contador;
	document.getElementById('producto').value=negativo;
}
else {
document.getElementById('producto').value=negativo;

}


}//FIN DE LA FUNCIÓN