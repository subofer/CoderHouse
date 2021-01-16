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
		this.georef=[];
		this.provincias=[];
	}

	GetJson(url, callback){
		fetch(url)
		  .then(response => response.json())
		  .then(jsonResponse =>	{
		  	this.georef = jsonResponse;
		  	callback(jsonResponse);
		  })
	}

	SetProvincias(){
		const Url = "https://apis.datos.gob.ar/georef/api/provincias";
		this.GetJson(Url, this.provincias)
	}	

	SetLocalidades(provincia){
		const Url = "https://apis.datos.gob.ar/georef/api/localidades?provincia="+provincia+"&max=5000";
		this.GetJson(Url, this.localidades)
	}

	devolerIndex(id){
		return this.georef.provincias.findIndex(prov=> prov.id === id);
	}

	provincias(objeto) {
		this.georef.provincias = objeto.provincias;
		console.log(objeto.provincias);
	}


	localidades(objeto) {
		console.log(objeto.localidades);
		let pepe = objeto.localidades[0].provincia.id;
		console.log("id -->" + pepe);
		let index = devolerIndex(pepe);
		console.log(index);
		//this.GeoRef.provincias[1].localidades = objeto.localidades;
		console.log(objeto.localidades);
	}

	getinfo(){
		return this.georef
	}
}


let datos = new georef();

datos.SetProvincias();
datos.SetLocalidades("02");


setTimeout(() => {  console.log(datos.getinfo()); }, 500);


/*

function agreeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(agreeting);*/