document.getElementById("lista_productos").innerHTML += prod.getTarjetas();

let carro = new pedido();

  const btnProducts = document.querySelectorAll('.botonCompra');
  btnProducts.forEach(btnProduct =>  btnProduct.addEventListener('click', onSelectClick))



function onSelectClick(event){
	carro.addItem(prod.porId(event.target.dataset.id))

	guardaLocal("carrito",carrito)

}

function borrarCarro(){
	borraLocal("carrito")
}


function ModalComplete(){
	let chango = leeLocal("carrito")
	let formulario = document.getElementById("text")
	formulario.value = "";
		if (chango){
			chango.forEach(producto => formulario.value += `(${producto.codigo}/${producto.precio})` )
		}
		//document.getElementById("text").value += JSON.stringify(carro);
}