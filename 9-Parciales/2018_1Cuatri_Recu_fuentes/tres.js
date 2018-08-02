function mostrar()
{
 var precio;
 var porcentaje;
 var descuento;
 var precioConDescuento;
 var iva;
 var precioFinal;
 precio = prompt("ingrese precio del articulo");
 precio = parseInt(precio);

 porcentaje = prompt ("ingrese porcentaje de descuento")
 porcentaje  = parseInt(porcentaje)

descuento = (porcentaje/100)*precio

precioConDescuento = precio - descuento;

iva = precioConDescuento * 0.21;
precioFinal = precioConDescuento+iva;

alert ("el descuento en dinero es: "+descuento+" El precio con el descuento es: "+precioConDescuento+" el IVA es: "+iva)



document.getElementById('elPrecioFinal').value=precioFinal;

}
