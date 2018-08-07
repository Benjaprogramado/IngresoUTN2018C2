function mostrar()
{

var marca;
var peso;
var temperatura;
var contadorTempPares=0;
var marcaMasPesado;
var contadorBajoCero=0;
var promedioPesos;
var contadorPesos=0;
var acumuladorPesos=0;
var pesoMaximo;
var pesoMinimo;
var flag=0;

do{
    marca=prompt("Ingrese una marca para el producto:");
    marca=marca.toLocaleLowerCase();
    peso=parseInt(prompt("Ingrese un peso para el producto:"));
    while(peso<1||peso>100||isNaN(peso)){
        peso=parseInt(prompt("ERROR, Ingrese un peso ENTRE 1 y 100:"));
    }
    temperatura=parseInt(prompt("Ingrese una temperatura de conservación:"));
    while(temperatura<-30||temperatura>30||isNaN(temperatura)){
        temperatura=parseInt(prompt("ERROR,Ingrese una temperatura entre -30 y 30:"));
    }

    if(temperatura%2==0){
        contadorTempPares++;
    }
    if(temperatura<0){
        contadorBajoCero++;
    }

    if(peso<pesoMinimo||flag==0){
        pesoMinimo=peso;
    }
    if(peso>pesoMaximo||flag==0){
        pesoMaximo=peso;
        marcaMasPesado=marca;
        flag=1;
    }
    acumuladorPesos=acumuladorPesos+peso;
    contadorPesos++;




respuesta=prompt("Desea continuar???");    
}while(respuesta=="si")

promedioPesos=acumuladorPesos/contadorPesos;

document.write("Temperaturas pares:"+contadorTempPares+"</br>La marca del producto mas pesado:"+marcaMasPesado+"</br>Cantidad de productos que se conservan bajo cero:"+contadorBajoCero+"</br>Promedio de todos los pesos:"+promedioPesos+"</br>Peso máximo:"+pesoMaximo+"</br>Peso mínimo:"+pesoMinimo);







/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )
*/    
}
