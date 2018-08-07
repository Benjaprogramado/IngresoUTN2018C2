function mostrar()
{

var nota;
var edad;
var sexo;
var promedioNotas;
var acumuladorNotas=0;
var contadorNotas=0;
var notaBaja;
var sexoNotaBaja;
var mayoresAprobados=0;
var sexoMasJoven;
var notaMasJoven;
var edadMasJoven;
var edadPrimerMujer;
var notaPrimerMujer;
var flag=0;
var flag2=0;

for(n=0;n<5;n++){
    nota=parseInt(prompt("Ingrese una nota"));
    while(nota<0||nota>10||isNaN(nota)){
        nota=parseInt(prompt("ERROR, Reingrese una nota"));
    }
    sexo=prompt("Ingrese m o f para el sexo:");
    sexo=sexo.toLowerCase()
    while(sexo!="m"&&sexo!="f"){
        sexo=prompt("ERROR,Ingrese m o f para el sexo:");
    }
    edad=parseInt(prompt("Ingrese una edad"));

    acumuladorNotas=acumuladorNotas+nota;
    contadorNotas++;

    if (nota<notaBaja||flag==0){
        notaBaja=nota;
        sexoNotaBaja=sexo;
    }
    if (edad>18&&nota>=6&&sexo=="m"){
        mayoresAprobados++;
    }
    if (edad<edadMasJoven||flag==0){
        edadMasJoven=edad;
        notaMasJoven=nota;
        sexoMasJoven=sexo;
        flag=1

    }
    if (sexo=="f"&&flag2==0){
        edadPrimerMujer=edad;
        notaPrimerMujer=nota;
        flag2=1
    
    }
    else{
        edadPrimerMujer=("No se igresaron mujeres");
        notaPrimerMujer=("No se igresaron mujeres"); 
    }

}

promedioNotas=acumuladorNotas/contadorNotas;

alert("A)"+promedioNotas+"\nB)"+notaBaja+sexoNotaBaja+"\nC)"+mayoresAprobados+"\nD)"+sexoMasJoven+notaMasJoven+"\nE)"+edadPrimerMujer+notaPrimerMujer);

}

/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.*/