function mostrar()
{

var num1;
var num2;

num1=parseInt(prompt("ingrese un número:"));
num2=parseInt(prompt("ingrese otro número:"));

if (num1==num2){
    num1=num1.toString();
    alert("El resultado es "+(num1+num2));
}
else if(num1>num2){
    alert("El resultado es "+(num1/num2));
}
else{
    suma=num1+num2
    
    if(suma<50){
        alert("El suma es "+suma+" y es menor a 50");
        
    }
    else{
        alert("El suma es "+suma); 
    }
}

}
/*Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/