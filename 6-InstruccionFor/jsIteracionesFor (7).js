function mostrar()
{

	var numero;
	var contDivisores=0;
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	for (var i = 1; i <= numero; i++) {

		if (numero%i == 0){

			document.write("los numeros divisores son: "+  +"<br>")
			contDivisores++;
		}
	}

		document.write("cantidad de numeros divisores: "+contDivisores+"<br>")


}  


/*{
    var num;
    var cantnumdiv=0;
    num=prompt("ingrese un numero");
    num=parseInt(num);
    for(var num; num>=1; num--)
    {
        if(num%1==0)
        {
        	cantnumdiv++
            document.write("numeros divisores de: " + num + "<br>")
        }
 

 }

document.write("cantidad de divisores : " + cantnumdiv + "<br>")


}*/
