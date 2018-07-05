/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
    var edad;
    var resultado;
    nombre= document.getElementById(nombre).value;
    edad= document.getElementById(edad).value;
    resultado= alert("usted se llama " + nombre+ "y" + "tiene " + edad )
}

