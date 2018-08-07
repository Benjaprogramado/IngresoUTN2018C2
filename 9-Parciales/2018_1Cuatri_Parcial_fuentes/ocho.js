function mostrar()
{

var numero;
var letra;
var contadorPares=0;
var contadorImpares=0;
var contadorCeros=0;
var contadorPositivos=0;
var acumuladorPositivos=0;
var promedioPositivos=0;
var acumuladorNegativos=0;
var letraMax;
var letraMin;
var maximo;
var minimo;
var respuesta;
flag=0;

do{
    numero=parseInt(prompt("Ingrese un número:"));
    while(numero<-100||numero>100||isNaN(numero)){
        numero=parseInt(prompt("ERROR,Ingrese un número <100 y >(-100):"));
    }
    letra=prompt("Ingrese una letra");

    if(numero%2==0){
        contadorPares++;
    }
    else{
        contadorImpares++;
    }

    if(numero<0){
        acumuladorNegativos=acumuladorNegativos+numero;
    }
    else if(numero>0){
        contadorPositivos++;
        acumuladorPositivos=acumuladorPositivos+numero;
    }
    else{
        contadorCeros++;
    }

    if(numero>maximo||flag==0){
        maximo=numero; 
        letraMax=letra;   
    }
    if (numero<minimo||flag==0){
        minimo=numero;
        letraMin=letra;
        flag=1;
    }




respuesta=prompt("Desea continuar???");
}while (respuesta=="si");

promedioPositivos=acumuladorPositivos/contadorPositivos;

document.write("Cantidad de números pares:"+contadorPares+"</br>Cantidad de números impares:"+contadorImpares+"</br>Cantidad de ceros:"+contadorCeros+"</br>Promedio de números positivos:"+promedioPositivos+"</br>La suma de todos los negativos es:"+acumuladorNegativos+"</br>El numero minimo es:"+minimo+"</br>La letra del número minimo es:"+letraMin+"</br>El número máximo es:"+maximo+"</br>La letra del número máximo es:"+letraMax);
}

/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
*/