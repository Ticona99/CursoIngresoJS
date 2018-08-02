function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var division;
	numero1 = prompt("ingrese un numero")
	numero1 = parseInt(numero1);
	numero2 = prompt("ingrese otro numero")
	numero2 = prompt(numero2);

	if (numero1==numero2) 
		{
			alert(numero1+" y "+ numero2);

		} else  if(numero1>numero2){

			division = numero1/numero2;
			

		}else{

			suma = numero1+numero2;
		}

}

 if (suma<50) {

 	alert(suma+"La suma es: "+suma+"y es menor a 50");
 } 
}