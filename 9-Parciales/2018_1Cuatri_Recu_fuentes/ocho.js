function mostrar()
{

    var nombre;
    var paginas;
    var ventas;
    var tema;
    var promedioVentas;
    var acumuladorVentas=0;
    var contadorVentas=0;
    var coontadorCeroVentas=0;
    var contadorPares=0;
    var contadorImpares=0;
    var pagsProgamacion=0;
    var flag=0;
    
    
    do{
        nombre=prompt("Ingrese un nombre");
    
        tema=prompt("Ingrese un tema:");
        tema=tema.toLowerCase()
        while(tema!="programación"&&tema!="base de datos"&&tema!="robótica"&&tema!="patrones"){
            tema=prompt("ERROR,Ingrese un tema valido");
            tema=tema.toLowerCase()
        }
        paginas=parseInt(prompt("Ingrese cantidad de paginas"));
        while (paginas<0||isNaN(paginas)){
            paginas=parseInt(prompt("ERROR,Ingrese cantidad de paginas"));

        }
        ventas=parseInt(prompt("Ingrese cantidad de ventas"));
        while (ventas<0||isNaN(ventas)){
            ventas=parseInt(prompt("ERROR,Ingrese cantidad de ventas"));
        }
        acumuladorVentas=acumuladorVentas+ventas;
        contadorVentas++;
    
        if (paginas%2==0){
            contadorPares++;

        }
        else{
            contadorImpares++;
        }

        if (ventas==0){
            coontadorCeroVentas++;
        }
        if (tema=="programación"){
            pagsProgamacion=pagsProgamacion+paginas;
        }

     respuesta=prompt("Desea continuar??");
    }while(respuesta=="si")
   
    promedioVentas=acumuladorVentas/contadorVentas;

document.write("Libros con pags pares: "+contadorPares+"</br>Libros con pags impares: "+contadorImpares+"</br>Libros con cero ventas "+coontadorCeroVentas+"</br>Promdeio de todas las ventas "+promedioVentas+"</br>Suma de pags de libros de programación "+pagsProgamacion);

}
/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro, nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema (posibles temas: “robótica", "programación", "patrones", "base de datos”) 
validar e ingresar datos hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de libros con páginas pares. 
b) La cantidad de libros con páginas impares. 
c) La cantidad de ceros ventas. 
d) El promedio de todas las ventas ingresadas. 
e) La suma de todas las páginas de los de "programación".*/