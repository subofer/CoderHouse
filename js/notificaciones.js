function notificar(item,cantidad) {
  $(".notify").toggleClass("active");

  if(cantidad == 1){
    cantidad = `agrego ${cantidad}Kg`
  }else{
    cantidad = `agregaron ${cantidad}Kg`
  }
  
  $(".success").attr('data-before',`Se ${cantidad} de ${mayuscula(item.nombre)} al carrito`);

  setTimeout(function(){
    $(".notify").removeClass("active");
  },2000);
};