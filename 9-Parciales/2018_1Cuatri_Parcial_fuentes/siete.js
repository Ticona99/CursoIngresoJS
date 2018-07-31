 function mostrar()
 {   
	var nombre, edad, sexo, mayores=0, menores=0,
	 cantidadMujeres=0, cantidadVarones=0, contador=0;

	nombre=prompt("ingrese su nombre");
	nombre=parseInt(nombre);

	edad=prompt("ingrese su edad");
	edad=parseInt(edad);

	while(edad>=100 ||edad<0 || isNaN(edad) && contador=<4){ 

		contador++;
		edad = prompt("ingrese una edad valida");
		edad = parseInt(edad);

	}
		
	sexo=prompt("ingrese su sexo M/F");
	sexo=parseInt(sexo);

	while(sexo!="M" && sexo!="F"){

		sexo=prompt("ingrese un sexo valido.")
		sexo=parseInt(sexo);
	}

	switch(sexo){

		case "M"
		sexo="Masculino";
		break;

		case "F"
		sexo="Femenino";
		break;
	}

	if (edad>=18){

		mayores++;

	}else{
		menores++;
	}	

	if (contador==0) {

		mayores=edad;
		menores=edad;

	} else {

		edad=mayores;
		edad=menores;
	}		

}
