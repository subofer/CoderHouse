//Agrega el producto y la cantidad al carrito
function AgregarProducto(event){
		var item = prod.porId(event.target.dataset.id)
		var cantidad = $(`#cantidad_${item.codigo}`).val()
		carro.addItem(item,cantidad)

		//probando notificaciones que se muevan y se borren suave.
		Notificacion(notificar(item,cantidad))
}

function borrarCarro(){
	borraLocal("carrito")
}

function updateAll(){
	ModalComplete()
	PaginaPedidos()
}

function ModalComplete(){
//Completa el modal del carrito con el listado del pedido
	$("#detallepedido").html(carro.tablaPedidos())
//Coloca en el campo de texto el mensaje codificado para enviar por mensaje
	$("#text").get(0).value= carro.getCodificado()
//manda a actualizar los badges, tanto para movil como para desktop (esto tengo que cambiar para que sea todo igual)
	badgeUpdate(carro.getCantidadTotal())
}

function badgeUpdate(cantidad){
//Actualiza el numero del badge del "carrito"
	$("#total_carro_m, #total_carro_d").html(cantidad)
}

//Completa la tabla del pedido
function PaginaPedidos(){
	$("#listaProducto").html(carro.tablaPedidos())
}

//Completa las tarjetas de productos
function PaginaProductos(){
   $("#lista_productos").html("");
  
      $("#lista_productos").append(prod.getTarjetas());

//asigna el event listener a los botones de las tarjetas, Jquery
    $('.botonCompra, .agregar').click(AgregarProducto)

    var numberSpinner = (function() {
  $('.number-spinner>.ns-btn>a').click(function() {
    var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;

    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
  });
  $('.number-spinner>input').keypress(function(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });
})();

}

// Escucha para el evento de cambios en el carrito
$(document).on( "cambios_en_carro", (e) => {
	guardaLocal("carrito", carro)
	updateAll()
})

function notificar(item,cantidad) {
  $(".notify").toggleClass("notificando");
  let palabra = "agrego"
  let mensaje = ""
    if(cantidad>1){palabra = "agregaron"}
    	mensaje = `Se ${palabra} ${cantidad}Kg de ${mayuscula(item.nombre)}`
  	$(".success").attr('data-before',mensaje);
	
  setTimeout(function(){
    $(".success").attr('data-before',``);
    $(".notify").removeClass("notificando");
   },1500);
  return mensaje
};

updateAll()