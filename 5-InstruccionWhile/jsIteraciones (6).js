function mostrar()
{
	var num;
	var contador=0;
	var acumulador=0;

	while(contador<5){ 

		num=parseInt(prompt("ingrese 5 numeros "))
		contador++
		acumulador=acumulador+num
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN