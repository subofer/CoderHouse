//Navega a la pagina utilizando el # de la barra
arrancar()
$(window).on('hashchange', () => arrancar());




function arrancar(){
/*Carga la Url segun el # y mantiene la pagina en refresh */
var url_actual = window.location.href.split('#')[1];

var url_actual1 = $(location).attr("href").split("#")[1];


var url_local  = leeLocal("url")
  
  //Carga la url anotada.
  if (url_actual){cargar_contenido(url_actual);
  
  //Retoma la ultima pagina navegada, guardada en el local storage
  }else if(url_local){cargar_contenido(url_local);
  
  //Contenido por defecto, Home.
  }else{cargar_contenido('home')}
}

//Carga el contenido en el Main, cambia la tag de descipción, el titulo de la pagina y centra el contenido en pantalla.
function cargar_contenido(destino){
    //remueve la clase activo de todos los elementos
    $(".activo").removeClass("activo");
    
    //carga el contenido elegido
    $("#contenido").load(`pages/${destino}.html`);
   
   /* Prueba de carga directamente desde Json, ejecuta los scripts.
   $("#contenido").html(productosHtml);
   $( document ).ready(function() {
      PaginaProductos();
    });
    */
    
    //Guarda la pagina actual en el local Storage
    guardaLocal("url", destino);
        
    //seleccion de descripciones segun contenido.
    document.title = `${mayuscula(pages[destino].titulo)} La Cocina de la Pipi`;
    
    //Cambia las descripciones de la pagina
    $("meta[name=description]").attr("content", pages[destino].keys);
    
    //coloca la clase activo
    $(`a[href="#${destino}"]`).addClass("activo")

}; 



  //Guarda en el local storage
function guardaLocal(key, valor){
      window.localStorage.setItem(key, JSON.stringify(valor))
  }

//lee del local storage
function leeLocal(key){
  let valor = window.localStorage.getItem(key)
      if (valor === null){
        return ""
      }else{
        return JSON.parse(valor)
      }
  }

function borraLocal(key){
      window.localStorage.removeItem(key)
  }
  
//Pasa la primer letra de cada palabra de un string a Mayuscula
function mayuscula(str) {
  return str.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
} 

//console.log(CargarJson());
function CargarJson() {
 return $.ajax({
      dataType: "json",
      url: "resources/json/productos.json",
      success: console.log("entro"),
      error: console.error(`Ocurrió un error... :(`)
   })
}


//Carga de las provincias con Ajax, luego se pisan con el objeto Georef, pero aca esta cumpliendo con el desafio Ajax.
//provincias()
function provincias() {
 return $.ajax({
      dataType: "json",
      url: "https://apis.datos.gob.ar/georef/api/provincias",
      data: "orden=id",
      success: data =>{
        $('#provincia_id').html("")
        $.each(data.provincias, function(i, el){
          $('#provincia_id').append( new Option(el.nombre,el.nombre ) );
        });
      },
      error: data => {
        console.error(`Nada`)
        $('#provincia_id').html("")
        $('#provincia_id').append( new Option("No se puede conectar al servicio remoto","error" ) );
      }
   })
}