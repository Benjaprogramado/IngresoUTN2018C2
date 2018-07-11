function mostrar()
{
var num1;
var num2;
var resultado;

num1 = prompt ("Ingrese el primer Número");
num2 = prompt ("Ingrese el segundo Número");

if (num1 == num2) {

    alert ("El resultado es "+num1+num2);
}

else if( parseInt(num1) > parseInt(num2)) {

    alert ("El resultado es "+(num1-num2));
} 
else{


num1=parseInt(num1);
num2=parseInt(num2);
resultado= num1+num2;

    

    if (resultado >10){

         alert ("El resultado es "+resultado+" y supero el 10");
    }

    else{

        alert ("El resultado es "+resultado);
    }
    
}



 
}
