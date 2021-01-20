document.getElementById("lista_productos").innerHTML += Tarjetas(productos);
let carrito = [];
  const btnProducts = document.querySelectorAll('.botonCompra');
  btnProducts.forEach(function(btnProduct) {
    btnProduct.addEventListener('click', onSelectClick);
  })

//Genera las tarjeas de productos, utilizando los datos del archivo "productos.json"
function Tarjetas(elemento){
	let respuesta="";
	elemento.forEach(familia =>{
		familia.productos.forEach(
			producto => {
				if (producto.mostrar===true){
					respuesta += 
						`<div class="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
							<div id="${producto.familia}_"${producto.variedad} class="card mt-3">
								<img class="card-img-top" src="${producto.img}" alt="${producto.nombre}">
								<div class="card-body">
									<input type="number"><br>
									<h5 class="card-title">${producto.nombre}</h5>
									<p class="card-text">${producto.texto}</p>

									<button class="botonCompra" data-familia="${producto.familia}" data-id="${producto.codigo}" type="button">Agregar al carrito</button>
								</div>
							</div>
						</div>`
					}
				}
			)
		}
	)
	return respuesta;
}

function onSelectClick(event){
	let producto = encontrar_producto(event.target.dataset.familia, event.target.dataset.id)
	carrito.push(producto)
	console.log(producto)	
	console.log(carrito)
}



function encontrar_producto(familia, codigo) {
let respuesta = "";
    productos.forEach(tipo =>{
    	if (tipo.tipo == familia){
			tipo.productos.forEach(producto => {
				if(producto.codigo == codigo){
					respuesta = producto
				}}
			)
      	}
    })
    return respuesta
}





