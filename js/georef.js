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
	constructor(c_provincias, c_localidades){
		this.url = "https://apis.datos.gob.ar/georef/api/"
		this.georef=[];
		this.provincias=[];
		this.combo= []
		this.combo.localidades = $(`#${c_localidades}`)
		this.combo.provincias  = $(`#${c_provincias}`)
	}

	GetJson(url, callback, combo ,key){
		fetch(url)
		  .then(response => response.json())
		  .then(jsonResponse =>	{
		  	this.georef = jsonResponse;
		  	callback(jsonResponse,key,combo);
		  })
	}

	asignar(valor,key,combo){
		let texto
		combo.empty()
        $.each(valor[key], function(i, el){
		  texto = mayuscula(el.nombre)
          combo.append( new Option(texto,texto));
        });
	}

	SetProvincias(){
		this.GetJson(`${this.url}provincias?orden=id`, this.asignar, this.combo.provincias, "provincias")
		this.combo.provincias.change( () => { this.SetLocalidades( this.combo.provincias.val() ) } );
	}	

	SetLocalidades(provincia){
		this.GetJson(`${this.url}localidades?provincia=${provincia}&max=5000`, this.asignar,  this.combo.localidades, "localidades")
	}

	devolerIndex(id){
		return this.georef.provincias.findIndex(prov=> prov.id === id);
	}

	provincias(objeto) {
		this.georef.provincias = objeto.provincias;
		//console.log(objeto.provincias);
	}


	localidades(objeto) {
		//console.log(objeto.localidades);
		let pepe = objeto.localidades[0].provincia.id;
		//console.log("id -->" + pepe);
		let index = this.devolerIndex(pepe);
		//console.log(index);
		//this.GeoRef.provincias[1].localidades = objeto.localidades;
		//console.log(objeto.localidades);
	}

	getinfo(){
		return this.georef
	}

}


let datos = new georef("provincia_id","localidad_id");

datos.SetProvincias();











/*
let foo = {	
	"provincias" : "provincias_id",
	"localidades":"localidades_id",
	"calles":"calles_id"}




//setTimeout(() => {  datos.SetLocalidades($('#provincia_id option:selected').text()); }, 500);


/*

function agreeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(agreeting);*/