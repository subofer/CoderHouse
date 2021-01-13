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



//-------- EL DESAFIO HASTA ACA -----------------------
/*
	"provincias"
		https://apis.datos.gob.ar/georef/api/provincias
	"departamentos"
		https://apis.datos.gob.ar/georef/api/departamentos?provincia=14&max=5000

	"municipios"
		https://apis.datos.gob.ar/georef/api/municipios?provincia=14&max=5000

	"localidades-censales"
		https://apis.datos.gob.ar/georef/api/localidades-censales?provincia=14&max=5000
		https://apis.datos.gob.ar/georef/api/localidades-censales?departamento=14&max=5000

	"asentamientos"
		https://apis.datos.gob.ar/georef/api/asentamientos?provincia=14&max=5000
		https://apis.datos.gob.ar/georef/api/asentamientos?departamento=14&max=5000

	"localidades"
		https://apis.datos.gob.ar/georef/api/localidades?provincia=14&max=5000
		https://apis.datos.gob.ar/georef/api/localidades?departamento=14014&max=5000

		https://apis.datos.gob.ar/georef/api/localidades?
		provincia=Santa%20Fe
		&departamento=Rosario
		&municipio=Granadero%20Baigorria
		&localidad_censal=Granadero%20Baigorria
		&aplanar=true&campos=estandar&max=10&exacto=true

	"calles"
		https://apis.datos.gob.ar/georef/api/calles?departamento=14014&max=5000

	"direcciones"
		https://apis.datos.gob.ar/georef/api/direcciones?direccion=%22juan%20de%20garay%202233%22
		https://apis.datos.gob.ar/georef/api/direcciones?direccion=%22juan%20de%20garay%202233%22&departamento=%22hurlingham%22


		"lat":-34.58196471072006,"lon":-58.64679742979327}

	"ubicacion"
		https://apis.datos.gob.ar/georef/api/ubicacion?lat=-32.0588735436448&lon=-59.2014475514635

	*/

class georef {
	
	
	
	//el constructor obtiene la lista de provincias.
	constructor(){
		const masterUrl = "https://apis.datos.gob.ar/georef/api/provincias?orden=id";
		this.apiGeoref;
		this.temp;
		fetch(masterUrl)
		  .then(response => response.json())
		  .then(jsonResponse =>	{
		  	this.apiGeoref = jsonResponse.provincias;
		  })
	}


	cargarDepartamento(provincia){
		let index = this.devolerIndex(provincia)
		if (!this.apiGeoref[index].hasOwnProperty('departamentos')){
			fetch("https://apis.datos.gob.ar/georef/api/departamentos?provincia="+provincia+"&max=5000")
		  		.then(response => response.json())
		  		.then(jsonResponse =>	{
						this.apiGeoref[index].departamentos = jsonResponse ;  
						console.log(jsonResponse)
				}
			)
		}
	}

	//Devuelve el Index de la Provincia en particular, por ID
	devolerIndex(id){
		return  this.apiGeoref.findIndex(prov=> prov.id === id);
	}

	//Carga todos los departamentos, falla por limite en la Api
	cargarDepartamentos(){
		this.apiGeoref.filter( provincia => this.cargarDepartamento(provincia.id));
	}




	responder(){
		return this.apiGeoref;
	}
	
	Provincias(){
		return this.apiGeoref;
	}

	Departamentos(provincia){
		return this.apiGeoref[this.devolerIndex(provincia)].departamentos;	
	}

	Provincia(codigo){
		return this.apiGeoref.filter( provincia => provincia.id === codigo)[0];
	}

};


let datos = new georef();


function Mostrargeo(){
	console.log(tata.provincias);
}

function prov(dato){
	//console.log(datos);
	//datos.cargarDepartamento("02")
	

	//console.log(datos.Provincias());
	
	console.log(datos.apiGeoref[1].nombre);
	 cargaProvincias();
}


function cargaProvincias(){
	
	CargarCombo("provincias");
	console.log("nada");

}



function meterEnCombo(tipo){
	var select = document.getElementById(destino);
	datos.apiGeoref.filter( item => {
		var option = document.createElement('option');
			option.value = item.id;
   			option.text = item.nombre;
    		select.add(option, 0);
		}
	);
};








function CargarCombo(destino){
	var select = document.getElementById(destino);
	datos.apiGeoref.filter( item => {
		var option = document.createElement('option');
			option.value = item.id;
   			option.text = item.nombre;
    		select.add(option, 0);
		}
	);
};



















/*
const selectProvincia = id => data.provincias.filter( provincia => provincia.id === id);
console.log(selectProvincia('14'));

function selectProvincia(id) {
  const prov = data.provincias.filter(function(provincia) {
    if (provincia.id === id) {
      return provincia;
    }
  });
  return prov;
}
*/