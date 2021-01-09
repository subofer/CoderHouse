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
{
	"destino":"Argentina",
	"envio":100
},{
	"destino":"resto del mundo",
	"precio":150}
]



//por ahora no voy a usar el Json
const catalogoJson =
[{		
		"id":"001",
		"familia":"Milanesa",
		"especie":"Pechuga de pollo",
		"precio":100
	},{
		"id":"002",
		"familia":"Milanesa",
		"especie":"Muslo de pollo",
		"precio":100
	},{

		"id":"003",
		"familia":"Milanesa",
		"especie":"Peceto",
		"precio":100
	},{
		"id":"004",
		"familia":"Milanesa",
		"especie":"Nalga",
		"precio":100
	},{
		"id":"005",
		"familia":"Hamburguesa",
		"especie":"pollo",
		"precio":100
	},{
		"id":"006",
		"familia":"Hamburguesa",
		"especie":"cerdo",
		"precio":100
	},{
		"id":"007",
		"familia":"Hamburguesa",
		"especie":"carne",
		"precio":100
	},{
		"id":"008",
		"familia":"Hamburguesa",
		"especie":"verdura",
		"precio":100
	}
];


//Esta clase es el carrito
let carrito = new Pedido();

//Agrego 2 del primer producto
let pedido_1_cliente = new Productos(catalogoJson[0],2);

//Agrego 5 del segundo producto
let pedido_2_cliente = new Productos(catalogoJson[1],5);

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

