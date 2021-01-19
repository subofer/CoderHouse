let tarjetas = document.getElementById("lista_productos")

function Tarjeta(elemento){
	if (elemento.mostrar===true){
	return `<div class="col-12 col-md-6 col-xl-4 d-flex align-items-stretch">
				<div id="${elemento.familia}_"${elemento.variedad} class="card mt-3">
					<img class="card-img-top" src="${elemento.img}" alt="${elemento.nombre}">
					<div class="card-body"><h5 class="card-title">${elemento.nombre}</h5>
					<p class="card-text">${elemento.texto}</p>
					</div>
				</div>
			</div>`
	}else{return ""}
}

productos.forEach(familia =>{
	console.log(familia.productos.length)
	familia.productos.forEach(
		producto => tarjetas.innerHTML +=Tarjeta(producto)
		)
	}
)














