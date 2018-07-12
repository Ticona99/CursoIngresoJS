/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


 
 function CalcularPrecio () 

{
	var cant,preciototal,precioconDesc,marca,precio ;
	cant = document.getElementById("Cantidad").value;
	document.getElementById("Marca").value = marca;
	precioconDesc=document.getElementById("precioDescuento").value;
   	precio = 35;
    preciototal = cant*precio;
	
	if (cant>5) {

 		precioconDesc = preciototal * 0.5;

 	} else if (cant ==5 && marca == "ArgentinaLuz"){      

 	    precioconDesc = preciototal*0.6;

    } else if (cant==5){

    	precioconDesc= ptotal *0.7;

    }else if (cant==4 && (marca == "FelipeLamparas" || marca == "ArgentinaLuz")){

    	precioconDesc - preciototal * 0.75;

    }else if(cant==4){

    	precioconDesc = preciototal * 0.8;

    }else if (cant==3){

    	if(marca=="ArgentinaLuz"){

    		precioconDesc=preciototal*0.86;

    	}else if(marca=="FelipeLamparas"){

    		precioconDesc=preciototal*0.4;

    	}else {

    		precioconDesc=preciototal*0.95;
    	}
    }
    
    if (precioconDesc>120) {

    	precioconDesc=precioconDesc*1.1;

    	alert("Usted pago "+precioconDesc*0.1);
    }
    else {
    	    	alert("Usted pago "+precioconDesc*0.1+" de IIBB");

    }
}
