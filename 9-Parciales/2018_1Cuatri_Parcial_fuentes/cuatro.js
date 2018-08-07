function mostrar()
{
var num1;
var num2;
var resultado;

num1 = parseInt(prompt ("Ingrese el primer Número"));
num2 = parseInt(prompt ("Ingrese el segundo Número"));

if (num1 == num2) {

    alert ("El resultado es "+num1+num2.toString());
}

else if(num1>num2) {

    alert ("El resultado es "+(num1-num2));
} 
else{

  resultado= num1+num2;

    

    if (resultado >10){

         alert ("El resultado es "+resultado+" y supero el 10");
    }

    else{

        alert ("El resultado es "+resultado);
    }
    
}



 
}
