function notificar(item,cantidad) {
  $(".notify").toggleClass("active");

  let palabra = "agrego"
    if(cantidad>1){palabra = "agregaron"}

  $(".success").attr('data-before',`Se ${palabra} ${cantidad}Kg de ${mayuscula(item.nombre)} al carrito`);

  setTimeout(function(){
    $(".success").attr('data-before',``);
    $(".notify").removeClass("active");
    },2000);
};

