function mostrar()
{
var numero;
var acumNegativos =0;
var acumPositivos =0;
var contNegativos =0;
var contPositivos =0;
var contCeros =0;
var contPares =0;
var promedioPos =0;
var promedioNeg =0;
var diferencia;

var respuesta;

do {

    numero = parseInt(prompt("Ingrese un número"));
    //me fijo el signo del numero
    //El numero puede ser negativo, positivo o cero

    if (numero >0){
        //lo que se ejecuta si es positivo
        contPositivos++;
        acumPositivos= acumPositivos+numero;
    }
    else if (numero <0){
        //lo que se ejecuta si es negativo el numero
        contNegativos++;
        acumNegativos = acumNegativos +numero;
        
    }
else {

    //lo que pasa cuando se ingresa un numero 0
    contCeros++;
}

// mefijo ahora si el numero es par o impar

if (numero % 2 ==0){

    //lo que se debe ejecutar si el numero es parseInt

}    
} while (respuesta == "si");

//aca, finalizado el while, calculo promedios y diferencia

if (contNegativos != 0) {
    promedioNeg = acumNegativos / contNegativos;
}

if (contPositivos != 0) {

    promedioPos = acumPositivos / contPositivos;
}

diferencia = contPositivos - contNegativos;



//TERMINARLOOOOOOOOOOOOOOOOOOOOOOOOO

//finalizado


}//FIN DE LA FUNCIÓN