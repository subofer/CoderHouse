
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

//Destinos, con sus valores.
let destinos = [
	["Argentina",100], 
	["resto del mundo",150]
]

//Catalogo de productos en un arrya de 2d
const catalogo = [
	["Milanesa","Pechuga de pollo", 100],
	["Milanesa","Muslo de pollo",  	100],
	["Milanesa","Peceto",  			100], 
	["Milanesa","Nalga", 			100],
	["Hamburguesa","pollo", 		100],
	["Hamburguesa","cerdo", 		100],
	["Hamburguesa","carne",  		100], 
	["Hamburguesa","verdura",		100]
];


//por ahora no voy a usar el Json
const catalogoJson =
[{		
		"id":"001";
		"familia":"Milanesa",
		"tipo":"Pechuga de pollo",
		"precio":100
	},{
		"id":"002";
		"familia":"Milanesa",
		"tipo":"Muslo de pollo",
		"precio":100
	},{

		"id":"003";
		"familia":"Milanesa",
		"tipo":"Peceto",
		"precio":100
	},{
		"id":"004";
		"familia":"Milanesa",
		"tipo":"Nalga",
		"precio":100
	},{
		"id":"005";
		"familia":"Hamburguesa",
		"tipo":"pollo",
		"precio":100
	},{
		"id":"006";
		"familia":"Hamburguesa",
		"tipo":"cerdo",
		"precio":100
	},{
		"id":"007";
		"familia":"Hamburguesa",
		"tipo":"carne",
		"precio":100
	},{
		"id":"008";
		"familia":"Hamburguesa",
		"tipo":"verdura",
		"precio":100
	}
];

//Esta clase es el carrito
let carrito = new Pedido();

//Agrego 2 del primer producto
let pedido_1_cliente = new Productos(catalogo[0],2);

//Agrego 5 del segundo producto
let pedido_2_cliente = new Productos(catalogo[1],5);

//Agrego los productos al carrito
carrito.addItem(pedido_1_cliente);
carrito.addItem(pedido_2_cliente);

//agrego el destino
carrito.setDestino(destinos[0]);


//calculo el total
carrito.CalcularTotal();
//muestro el carrito, y el total
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());

//remuevo un item
carrito.removeItem(pedido_1_cliente);

//calculo nuevamente el total
carrito.CalcularTotal();
//muestro el carrito, y el total
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());

