
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

 base = prompt("ingrese la base del triangulo ")
 base =  parseInt(base);

 altura = prompt("ingrese la altura del triangulo")
 altura = parseInt(altura);

 superficie = (base*altura)/2;
 perimetro = 3*base;

 alert(" la superficie del triangulo es: "+ superficie+" y el perimetro del triangulo es: "+perimetro)


}
