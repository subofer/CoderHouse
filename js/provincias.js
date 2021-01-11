let masterUrl = "https://apis.datos.gob.ar/georef/api/"
let Distancia_Maxima_Envio = 350;
cargarProvincias();



class geo{

	constructor(){
		const requestURL = 'https://apis.datos.gob.ar/georef/api/provincias';
		const request = new XMLHttpRequest();
		var superHeroesText;
		
		request.open('GET', requestURL);
		request.responseType = 'json'; // recibimos una cadena de tipo "string"
		request.send();
		
		request.onload = function() {
		  superHeroesText = request.response; // cogemos la cadena de response
		  //console.log(superHeroesText);
		  this.lista=superHeroesText;
		}

	}

	getLista(){
		return this.lista;
	}

}



let provincias = new geo;


//console.log(provincias.getLista());


let Aurl = "https://apis.datos.gob.ar/georef/api/provincias"

async function myFetch() {
  let response = await fetch(Aurl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
  	console.log(response);
  }
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});


/*
class Georef{
	constructor() {
		this.listado=[];
	}

	cargarDatos(){
		fetch("https://apis.datos.gob.ar/georef/api/provincias")
	  		.then(response => response.json())
	  		.then(jsonResponse =>	{
	  				this.listado = jsonResponse.provincias;
	  				console.log(this.listado);
  				});
			
	}

}


let pepo = new Georef();

pepo.cargarDatos();

console.log(pepo);
//console.log(pepo.listado);
*/


function cargarDatos(url,tipo,vaciar){
	fetch(url)
	  .then(response => response.json())
	  .then(jsonResponse =>	{
	  	jsonResponse[tipo].sort(function (a, b) {
	    	return a.id.localeCompare(b.id);
		});

	  	if(vaciar){VaciarCombo(tipo)};

	  	CargarCombo(jsonResponse[tipo],tipo);
	  })
}

function cargarProvincias(){
	cargarDatos(masterUrl + "provincias","provincias",false);
}

function cargarLocalidades(){
	let url_localidades = masterUrl + "localidades?provincia="+document.getElementById("provincias").value+"&max=5000";
	cargarDatos(url_localidades,"localidades",true);
	cargarMunicipio();
}

function cargarMunicipio(){
	let url_municipio = masterUrl + "municipios?provincia="+document.getElementById("provincias").value+"&max=5000";
	cargarDatos(url_municipio,"municipios",true);
}




//popula los combo box con los datos necesarios.
function CargarCombo(json,destino){
	var select = document.getElementById(destino);
 		json.forEach(function(item){
				var option = document.createElement('option');
		
				option.value = item.id;
   				option.text = item.nombre;
				if (destino  == "localidades"){
					option.value = item.localidad_censal.id;
    				option.text = item.localidad_censal.nombre;	
    			}

    			if (calcular_destino(item.centroide.lat, item.centroide.lon) > Distancia_Maxima_Envio){
    				option.className = "lejos";
					option.disabled = true;		
    			}
    			

    			select.add(option, 0);
    		
   			});
};

function VaciarCombo(id){
	document.getElementById(id).innerHTML = "";
}


function calcular_distancia(loc){
	//latitud y longitud del local
	//-34.382793787743545, -58.85961687275489
	let url ="https://apis.datos.gob.ar/georef/api/localidades?localidad_censal="+loc;
	fetch(url)
		.then(response => response.json())
		.then(jsonResponse => {

    			let centroide = jsonResponse.localidades[0].centroide;
				let distancia = calcular_destino(centroide.lat,centroide.lon)
				VaciarCombo("mapita");
				generarMapa(centroide.lat,centroide.lon)
				let precio_km = 50;
				let precio_total = precio_km*distancia; 
				console.log("La distancia del envio es de: " + distancia + " Kilometros" );
				console.log("el costo del envio es de: $" + precio_total );
		});
};


function calcular_destino(lat2,lon2){
	
	let lat1 =-34.382793787743545;
	let lon1= -58.85961687275489;

	rad = function(x) {return x*Math.PI/180;}
	var R = 6378.137; //Radio de la tierra en km
	 var dLat = rad( lat2 - lat1 );
	 var dLong = rad( lon2 - lon1 );
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
	 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	 var d = R * c;
	
	return d.toFixed(0); //Rendondeo
 }


function generarMapa(lat,lon,dist){
	let framito = '<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q='+lat+','+lon+'&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
	var div = document.createElement('div');
    div.innerHTML = framito;
    document.getElementById('mapita').appendChild(div);
}