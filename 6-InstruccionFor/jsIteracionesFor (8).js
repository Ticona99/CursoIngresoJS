function mostrar()
{

	var numero;
	var contDivisor;
	numero = prompt("Ingrese un numero")
	numero = parseInt(numero);

	for (var i = 2; i < numero; i++) {

		if( num % i == 0){

			document.write("No es primo")
			contDivisor++
		}
		
	}


}//FIN DE LA FUNCIÓN