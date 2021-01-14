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
		fetch(masterUrl)
		  .then(response => response.json())
		  .then(jsonResponse =>	{
		  	this.apiGeoref = jsonResponse;
		  	this.provincias = jsonResponse.provincias;

		  	console.log(this.apiGeoref["provincias"]);
		  	this.CargarCombo(this.provincias,"provincias");
		  	this.AjustarCombo();
		  })
	}





	//Carga los departamentos en el arreglo de provincias
	cargarDepartamento(provincia){
		let index = this.devolerIndex(provincia);
		this.VaciarCombo("departamentos");
		this.CargarCombo("cargando","departamentos");

		if(!this.provincias[index].hasOwnProperty('departamentos')){
			fetch("https://apis.datos.gob.ar/georef/api/departamentos?provincia="+provincia+"&max=5000")
			.then(response => response.json())
		  	.then(jsonResponse =>	{
				this.provincias[index].departamentos = jsonResponse.departamentos ; 
				console.log(jsonResponse.departamentos);
				let temp = this.provincias[index].departamentos;


				this.acciones(temp);
				//this.VaciarCombo("departamentos");
				//this.CargarCombo(jsonResponse.departamentos,"departamentos");
				}
			);
	  	}else{
			this.acciones(jsonResponse.departamentos);
			//this.CargarCombo(jsonResponse.departamentos,"departamentos");
		}
	}
	

acciones(listado){
	this.VaciarCombo("departamentos");
	console.log(listado)
	this.CargarCombo(listado,"departamentos")
}

		//llamo a la funcion con el enlace, y le entrego el destino.


acargarDepartamento(callback,provincia){

	let index = this.devolerIndex(provincia);
	console.log("index ->" + index);
		this.VaciarCombo("departamentos");
		this.CargarCombo("cargando","departamentos");

			fetch("https://apis.datos.gob.ar/georef/api/departamentos?provincia="+provincia+"&max=5000")
			.then(response => response.json())
		  	.then(jsonResponse =>	{
				this.provincias[index].departamentos = jsonResponse.departamentos ; 
				console.log("aca");
				console.log(jsonResponse.departamentos);
				callback(jsonResponse.departamentos);
				}
			);

}




	//Devuelve el Index de la Provincia en particular, por ID
	devolerIndex(id){
		return this.provincias.findIndex(prov=> prov.id === id);
	}

	//Carga todos los departamentos, falla por limite en la Api !No usar por ahora.
	cargarDepartamentos(){
		this.apiGeoref.filter( provincia => this.cargarDepartamento(provincia.id));
	}

	Provincia(codigo){
		return this.provincias.filter( provincia => provincia.id === codigo)[0];
	}
	
	//carga el combo indicado
	CargarCombo(lista, id){
		if (lista === "cargando"){
		var select = document.getElementById(id);
			var option = document.createElement('option');
				option.value = option.text = "Cargando....";
    			select.add(option, 0);
		}else{
			var select = document.getElementById(id);
			lista.filter( item => {
				var option = document.createElement('option');
					option.value = item.id;
   					option.text = item.nombre;
    				select.add(option, 0);
				}
			);
		}
	};

	//borra el contenido del combo indicado.
	VaciarCombo(id, vaciar = true){
		if (vaciar){document.getElementById(id).innerHTML = ""};
	}

	AjustarCombo(){
		//document.getElementById("provincias").setAttribute("onchange", "ShowDeptos(datos.acciones(),this.value);");
		document.getElementById("provincias").setAttribute("onchange", "ShowDeptos(this.value);");
	}





};





let datos = new georef();



function prov(dato){
	console.log(datos.provincias);
	//console.log(datos);
	//datos.cargarDepartamento("02")
	//console.log(datos.Provincias());
	//console.log(datos.provincias[1].nombre);
	//cargaProvincias();

}

function ShowDeptos(provincia){
	datos.cargarDepartamento(provincia)
}


/*
datos.cargar(provincias())
datos.cargar(departamentos(provincia))






	cargar(quecargar,dondecargar,url){
		const masterUrl = "https://apis.datos.gob.ar/georef/api/provincias?orden=id";
		this.apiGeoref;
		fetch(url)
		  .then(response => response.json())
		  .then(jsonResponse =>	{
		  	this.apiGeoref = jsonResponse;
		  	this.provincias = jsonResponse.provincias;
		  	this.CargarCombo(this.provincias,"provincias");
		  	document.getElementById("provincias").setAttribute("onchange", "ShowDeptos(datos.acciones(),this.value);");
		  })
	}





url = "https://apis.datos.gob.ar/georef/api/provincias?orden=id";
que = "provincias"
donde ="provincias"
cargar()*/