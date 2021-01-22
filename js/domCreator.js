
//Completa las tarjetas de productos
document.getElementById("lista_productos").innerHTML += prod.getTarjetas();
//asigna el event listener a los botones de las tarjetas
document.querySelectorAll('.botonCompra').forEach(btnProduct =>  btnProduct.addEventListener('click', onSelectClick))




//Agrega el producto y la cantidad al carrito
function onSelectClick(event){
		var item = prod.porId(event.target.dataset.id)
		var cantidad = document.getElementById(`cantidad_${item.codigo}`).value
		var precio = item.precio
		carro.addItem(item,cantidad)
		carro.addParcial(precio*cantidad)
}

function borrarCarro(){
	borraLocal("carrito")
}


function ModalComplete(){
	let formulario = document.getElementById("text")
	let total = document.getElementById("total_pedido") 
	total.innerHTML = carro.ShowTotal()
	formulario.value = "";
	carro.cart.forEach(producto => formulario.value += `(${producto.item.codigo}/${producto.cantidad})` )
}