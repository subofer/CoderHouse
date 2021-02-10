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
	constructor(componentes){

		this.url = "https://apis.datos.gob.ar/georef/api/"
		this.georef=[];
		this.provincias=[];
		this.combo= []
		
		this.combo.provincias  = $(`#${componentes.c_provincia}`)
		this.combo.localidades = $(`#${componentes.c_localidad}`)

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
		combo.empty()
        $.each(valor[key], (i, el) => {
		  let texto = mayuscula(el.nombre)
          combo.append( new Option(texto,el.id));
        });
	}

	SetProvincias(){
		this.GetJson(`${this.url}provincias?orden=id`, this.asignar, this.combo.provincias, "provincias")
		this.combo.provincias.change( () => { this.SetLocalidades( this.combo.provincias.val() ) } );
	}	

	SetLocalidades(provincia){
		this.GetJson(`${this.url}localidades?provincia=${provincia}&max=5000&orden=id`, this.asignar,  this.combo.localidades, "localidades")
	}

	devolerIndex(id){
		return this.georef.provincias.findIndex(prov=> prov.id === id);
	}

	localidades(objeto) {
		return this.devolerIndex(objeto.localidades[0].provincia.id);
	}

	getinfo(){
		return this.georef
	}

}


//La llamada al objeto, es con la lista de los ID de los combos donde se pondran los datos.
let datos = new georef({
						"c_provincia":"provincia_id",
						"c_localidad":"localidad_id",
					})

datos.SetProvincias();