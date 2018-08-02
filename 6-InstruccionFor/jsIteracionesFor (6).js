function mostrar()
{
	var numero;
	var contPares=0;
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	for (var i = 1; i <= numero; i++) {

		if (i % 2 == 0){

			document.write("los numeros pares son: "+i+"<br>")
			contPares++;
		}
	}

		document.write("cantidad de numeros pares: "+contPares+"<br>")
}   //FIN DE LA FUNCIÓN

/*function mostrar()
{
    var num
    var cantnumpar=0
    num=prompt("ingrese numero ")
    num=parseInt(num)
    for(var num;num>1;num--)
    {
       if(num%2==0 && num!=0)
       {
            document.write("numeros pares desde el: " + num + "<br>")
            cantnumpar++
            
        }
      
        
    }

    document.write("cantidad de numeros pares: " + cantnumpar + "<br>")
    
}*/