//Agrega el producto y la cantidad al carrito
function AgregarProducto(event){
		var item = prod.porId(event.target.dataset.id)
		var cantidad = $(`#cantidad_${item.codigo}`).val()
		carro.addItem(item,cantidad)
}

function borrarCarro(){
	borraLocal("carrito")
}


// Escucha para el evento de cambios en el carrito
document.addEventListener('cambios_en_carro', e => {
	ModalComplete() 
	PaginaPedidos()
}, false);


function ModalComplete(){
	$("#detallepedido").html(carro.tablaPedidos())
	$("#text").val("")
	badgeUpdate(carro.cart.length)
	carro.cart.forEach(producto => $("#text").get(0).value += `(${producto.item.codigo}/${producto.cantidad})`)
}

function badgeUpdate(cantidad){
	$("#total_carro_m").html(cantidad)
	$("#total_carro_d").html(cantidad)
}

function PaginaPedidos(){
	$("#listaProducto").html(carro.tablaPedidos())
}


function PaginaProductos(){
//Completa las tarjetas de productos
   $("#lista_productos").html(prod.getTarjetas());
//asigna el event listener a los botones de las tarjetas
    $('.botonCompra').get().forEach(btn =>  btn.addEventListener('click', AgregarProducto))
}