function mostrar()
{

var nota;
var sexo;
var promedioNotas=0;
var notaBaja;
var sexoNotaBaja;
var varonesNotaMasSeis=0;
var flag=0;

for (n=0;n<5;n++){

    nota=parseInt(prompt("Ingrese una nota:"));

    while(nota<0 ||nota>10 ||isNaN(nota))  {
        nota=parseInt(prompt("ERROR,Ingrese una nota entre 0 y 10:"));
    
    }

    sexo=prompt("Ingrese f o m para el sexo");
    sexo=sexo.toLowerCase();

    while(sexo!="m"&& sexo!="f")  {
        sexo=prompt("ERROR,Ingrese f o m para el sexo");
    }
    
  
    

    if(nota<notaBaja ||flag==0){

        notaBaja=nota;
        sexoNotaBaja=sexo;
        flag=1;
    }
    if(nota>=6 && sexo=="m"){
        varonesNotaMasSeis++;


    
    }
    promedioNotas=promedioNotas+nota;

}
    



if(promedioNotas!=0){
    promedioNotas=(promedioNotas/5);
    }
    else{
        promedioNotas=promedioNotas;
    }


alert(" El promedio de notas es: "+promedioNotas+"\n La nota mas baja es: "+notaBaja+"\n El sexo de la nota mas baja es: "+sexoNotaBaja+"\n La cantidad de varones cuya nota es >=6 es: "+varonesNotaMasSeis);
}

//TERMINAR, HAY FOTOS DE AYUDA TAMBIEN
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
 


