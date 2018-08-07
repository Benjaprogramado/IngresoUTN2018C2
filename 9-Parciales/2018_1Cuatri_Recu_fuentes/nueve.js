function mostrar()
{
var animal;
var peso;
var tempHabitat;
var respuesta;
var tempPares=0;
var nombrePesado;
var tempPesado;
var mayorPeso;
var animalesBajoCero=0;
var promedioPesos;
var contadorPesos=0;
var acumuladorPesos=0;
var pesoMaxBajoCero;
var pesoMinBajoCero;
var flag=0;
var flag2=0;


do{
    animal=prompt("ingrese un animal:");
    animal=animal.toLowerCase();

    peso=parseInt(prompt("ingrese un peso:"));
    while(peso<1||peso>1000||isNaN(peso)){
        peso=parseInt(prompt("ERROR,ingrese un peso válido:"));
    }
    tempHabitat=parseInt(prompt("ingrese una temperatura:"));
    while(tempHabitat<-30||tempHabitat>30||isNaN(tempHabitat)){
        tempHabitat=parseInt(prompt("ERROR,ingrese una temperatura válida:"));
    }

    acumuladorPesos=acumuladorPesos+peso;
    contadorPesos++;

    if(tempHabitat%2==0){
        tempPares++;
    }
    if(peso>mayorPeso||flag==0){
        mayorPeso=peso;
        tempPesado=tempHabitat;
        nombrePesado=animal;
        flag=1;
    }
    if(tempHabitat<0){
        animalesBajoCero++;
        if(peso>pesoMaxBajoCero||flag2==0){
            pesoMaxBajoCero=peso;
        }
        if(peso<pesoMinBajoCero||flag2==0){
            pesoMinBajoCero=peso;
            flag2=1;
        }

    }


respuesta=prompt("Desea continuar???");
respuesta=respuesta.toLowerCase()    
}while(respuesta=="si")

promedioPesos=acumuladorPesos/contadorPesos;

document.write("Temperaturas Pares: "+tempPares+"</br>Nombre del animal mas pesado: "+nombrePesado+"</br>Temperatura del animal mas pesado: "+tempPesado+"</br>Cantidad de animales que viven bajo cero: "+animalesBajoCero+"</br>El promedio de todos los pesos es: "+promedioPesos+"</br>Peso maximo animales que viven bajo cero: "+pesoMaxBajoCero+"</br>Peso minimo animales que viven bajo cero: "+pesoMinBajoCero);

}

/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
 el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar
 al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. */