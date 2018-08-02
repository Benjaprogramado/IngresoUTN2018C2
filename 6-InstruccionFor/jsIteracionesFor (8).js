function mostrar()
{

ingreso=parseInt(prompt("Ingrese un número"));
contador=0

for (n=1;n<=ingreso;n++){

  if(ingreso%n==0){
    contador++;
  }
 
  }
  if(contador=="2"){

    console.log("El numero "+ingreso+" es primo");
  }
  else{
    console.log("El numero "+ingreso+" NO es primo");


  }

   
}
//TERMINARLO EN CASA, CUALQUIER COSA ESTA LA FOTO.




//FIN DE LA FUNCIÓN