
//Calcular los precios de un pedido, el costo de envio y enviar el pedido por whatsapp
//el costo de envio se calculara en base a la distancia, con un maximo y un minimo.
//el mensaje de whatsapp va a estar codificado para su interpretación de parte de otro script.
/*
catalogo:
	Un array de los productos disponibles para calcular.

producto:
- Precio
- Nombre
- Categoría

Carrito:
- productos
- calcular total
- etc.
*/

let destinos = [
	["Argentina",100], 
	["resto del mundo",150]
]

let catalogo = [
	["Milanesa","Pechuga de pollo", 100],
	["Milanesa","Muslo de pollo",  	100],
	["Milanesa","Peceto",  			100], 
	["Milanesa","Nalga", 			100],
	["Hamburguesa","pollo", 		100],
	["Hamburguesa","cerdo", 		100],
	["Hamburguesa","carne",  		100], 
	["Hamburguesa","verdura",		100]
];




//Esta clase es el carrito


let carrito = new Pedido();

let pedido_1_cliente = new Productos(catalogo[0],2);

let pedido_2_cliente = new Productos(catalogo[1],5);




carrito.addNewItem(pedido_1_cliente);
carrito.addNewItem(pedido_2_cliente);

carrito.setDestino(destinos[0]);



carrito.CalcularTotal();
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());





carrito.removeItem(pedido_1_cliente);

carrito.CalcularTotal();
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());

