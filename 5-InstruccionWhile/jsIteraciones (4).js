function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));

	while (!(numero >=0 && numero <=9)){

		numero = parseInt(prompt("ERROR, ingrese un número entre 0 y 9 inclusive."));
	}

document.getElementById("Numero").value = numero;

/*otra forma de resolverlo era:
var numero = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));
while (numero <0 || numero >9 || isNaN(numero)){

		numero = parseInt(prompt("ERROR, ingrese un número entre 0 y 9 inclusive."));
	}

alert ("El número es correcto");

//En este caso usamos "isNaN" para descartar ingresos vacios o con letras*/



}//FIN DE LA FUNCIÓN