//Agrega el producto y la cantidad al carrito
function AgregarProducto(event){
		var item = prod.porId(event.target.dataset.id)
		var cantidad = $(`#cantidad_${item.codigo}`).val()
		carro.addItem(item,cantidad)
		notificar(item,cantidad)
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
	$("#total_carro_m").html(cantidad)
	$("#total_carro_d").html(cantidad)
}

function PaginaPedidos(){
//Completa la tabla del pedido
	$("#listaProducto").html(carro.tablaPedidos())
}

function PaginaProductos(){
//Completa las tarjetas de productos
   $("#lista_productos").html(prod.getTarjetas());
//asigna el event listener a los botones de las tarjetas
    $('.botonCompra').get().forEach(btn =>  btn.addEventListener('click', AgregarProducto))
    $('.agregar').get().forEach(btn =>  btn.addEventListener('click', AgregarProducto))
}

// Escucha para el evento de cambios en el carrito
document.addEventListener('cambios_en_carro', e => {
	guardaLocal("carrito", carro)
	updateAll()
}, false);


function notificar(item,cantidad) {
  $(".notify").toggleClass("notificando");
  let palabra = "agrego"
    if(cantidad>1){palabra = "agregaron"}
  	$(".success").attr('data-before',`Se ${palabra} ${cantidad}Kg de ${mayuscula(item.nombre)} al carrito`);
  	
  setTimeout(function(){
    $(".success").attr('data-before',``);
    $(".notify").removeClass("notificando");
   },1500);
};

updateAll()