
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



const catalogoJson =
[{
		"familia":"Milanesa",
		"tipo":"Pechuga de pollo",
		"precio":100
	},{
		"familia":"Milanesa",
		"tipo":"Muslo de pollo",
		"precio":100
	},{
		"familia":"Milanesa",
		"tipo":"Peceto",
		"precio":100
	},{
		"familia":"Milanesa",
		"tipo":"Nalga",
		"precio":100
	},{
		"familia":"Hamburguesa",
		"tipo":"pollo",
		"precio":100
	},{
		"familia":"Hamburguesa",
		"tipo":"cerdo",
		"precio":100
	},{
		"familia":"Hamburguesa",
		"tipo":"carne",
		"precio":100
	},{
		"familia":"Hamburguesa",
		"tipo":"verdura",
		"precio":100
	}
];

console.log(catalogoJson);
/*
console.log("[");
catalogo.forEach(function(item){
		console.log("{")
		console.log('"familia":"'+item[0] + '",');
		console.log('"tipo":"'+item[1]+ '",');
		console.log('"precio":'+item[2]+ ',');
		console.log("},")
	});
console.log("]")

*/


//Esta clase es el carrito


let carrito = new Pedido();

let pedido_1_cliente = new Productos(catalogo[0],2);

let pedido_2_cliente = new Productos(catalogo[1],5);




carrito.addItem(pedido_1_cliente);
carrito.addItem(pedido_2_cliente);

carrito.setDestino(destinos[0]);



carrito.CalcularTotal();
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());





carrito.removeItem(pedido_1_cliente);

carrito.CalcularTotal();
console.log(carrito.ShowCart());
console.log(carrito.ShowTotal());

