/*Carga la Url segun el # y mantiene la pagina en refresh */
var url_actual = window.location.href.split('#')[1];
var url_local = leeLocal("url")

//Navega a la pagina utilizando el # de la barra
if (url_actual) {
    cargar_contenido(url_actual);

//Retoma la ultima pagina navegada, guardada en el local storage
}else if(url_local){
   cargar_contenido(url_local);

//Carga el home por defecto
}else{
    //Contenido por defecto, Home.
    cargar_contenido('home')
}


//Carga el contenido en el Main, cambia la tag de descipción, el titulo de la pagina y centra el contenido en pantalla.
function cargar_contenido(destino){
    //remueve la clase activo de todos los elementos
    Array.from(document.getElementsByClassName('activo')).forEach(el => el.classList.remove('activo'));
    
    //carga el contenido elegido
    $("#contenido").load(`pages/${destino}.html`);
    //Guarda la pagina actual en el local Storage
    guardaLocal("url", destino);
    
    //coloca la clase activo
    $(".link-"+ destino).addClass("activo");
    
    //seleccion de descripciones segun contenido.
    document.title = `${mayuscula(pages[destino].titulo)} La Cocina de la Pipi`;
    
    //Cambia las descripciones de la pagina
    document.getElementsByTagName('meta')["description"].content = pages[destino].keys;

    //centra la vista en el contenido cargado
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("barra_nav").scrollIntoView({block: "start", behavior: "smooth"});
  });
    
}; 


//Pasa la primer letra de un string a Mayuscula
function mayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
} 

  //Guarda en el local storage
function guardaLocal(key, valor){
      window.localStorage.setItem(key, JSON.stringify(valor))
  }

//lee del local storage
function leeLocal(key){
      JSON.parse(window.localStorage.getItem(key))
  }

function borraLocal(key){
      window.localStorage.removeItem(key)
  }









