
/*Carga la Url segun el # y mantiene la pagina en refresh */
var url_actual = window.location.href.split('#')[1];

if (url_actual) {
    cargar_contenido(url_actual);
}else{
    //Contenido por defecto, Home.
    cargar_contenido('home')
}


//Carga el contenido en el Main, cambia la tag de descipción, el titulo de la pagina y centra el contenido en pantalla.
function cargar_contenido(destino){
    //remueve la clase activo de todos los elementos
    Array.from(document.getElementsByClassName('activo')).forEach((el) => el.classList.remove('activo'));
    
    //carga el contenido elegido
    $("#contenido").load( "pages/" + destino + ".html" );
    
    //coloca la clase activo
    $(".link-"+ destino).addClass("activo");
    
    //seleccion de descripciones segun contenido.
    var titulo_ = 'La Cocina de la Pipi'
    document.title = destino.charAt(0).toUpperCase() + destino.slice(1) + " - " + titulo_;
    var palabras_clave ="";    
    switch (destino) {
       case 'precios':
           palabras_clave ='Lista de productos y sus precios';
        break;
       case 'productos':
           palabras_clave ='Fotos de nuestros productos, para que se te haga agua la boca';
        break;
       case 'recetas':
           palabras_clave ='Algunas recetas para tus milanesas';
        break;
       case 'contacto':
           palabras_clave ='Contactanos para hacer tu pedido, te lo llevamos o podes pasarlo a buscar';
        break;
       default:
           //contenido por defecto, home.
           palabras_clave ='Las milanesas y hamburguesas mas ricas de Pilar, congeladas y listas para el horno';
           document.title = 'La cocina de la Pipi'
       };
    
    //Cambia las descripciones de la pagina
    document.getElementsByTagName('meta')["description"].content = palabras_clave;

    //centra la vista en el contenido cargado
    document.getElementById("barra_nav").scrollIntoView({block: "start", behavior: "smooth"});
}; 








  
  
  