function mostrar()
{

var contPares=0;
var contImpares=0;
var contCeros=0;
var promedioPos
var acumPos=0;
var contPos=0;
var acumNeg=0;
var maximo;
var minimo;
var letra;
var numero;
var respuesta;

do{
    
    numero=parseInt(prompt("Ingrese un número;"));
    while(numero<-100 || numero>100 || isNaN(numero)){

        numero=parseInt(prompt("ERROR, Reingrese el número;"));

    }
    letra=prompt("Ingrese una letra:");

if(numero%2==0){
    contPares++;
}
else{
    contImpares++;
}




respuesta=prompt("Desea continuar??");
}while(respuesta=="si");


}
