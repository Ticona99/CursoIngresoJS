function mostrar()
{
	var numRandom;

	numRandom = Math.floor(Math.random()*(11-1)+1);

	if (numRandom == 9 || numRandom == 10) {

		alert (numRandom + " EXCELENTE");

	 } else { 

	 	if (numRandom>4) {
	 	
	 	alert(numRandom + " APROBO");

	 } else {
	 	
	 	alert(numRandom+" Vamos, la proxima se puede");
	 }

	}
}	 
