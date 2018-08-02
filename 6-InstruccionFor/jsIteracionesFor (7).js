function mostrar()
{

ingreso=parseInt(prompt("Ingrese un número"));
contador=0;

for (n=1;n<ingreso;n++){

  if(ingreso%n==0){
       document.write( n + "<br>");
       contador++;
    

     
  }
   
}
document.write("Cantidad de divisores "+contador);




}//FIN DE LA FUNCIÓN