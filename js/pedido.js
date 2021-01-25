class pedido {

	constructor(pedido) {

		if( pedido!="" ){
			this.cart  = pedido.cart
			this.total = pedido.total;
			this.envio = pedido.envio;
		}else{
			this.cart = [];	
			this.total = 0;
			this.envio = 0;
		}
		
		this.event = new Event("cambios_en_carro", {bubbles: false, cancelable: true});
	}

	evento(){ document.dispatchEvent(this.event) }

	addItem(item,cantidad){
		var q = parseInt(cantidad,10)
		if(!this.setCantidad(item , q)){
			this.cart.push({item, cantidad:q});		
		}
		this.evento()
	}

	sumarProducto(codigo,n=1){
		let index = this.indexPorCodigo(codigo) 
		let cantidad = this.cart[index].cantidad + n

		if (cantidad <=0){
			this.removeItem(this.cart[index])
		}else{
			this.cart[index].cantidad = cantidad			
		}
		this.evento()
	}

	restarProducto(codigo,n=1){
		this.sumarProducto(codigo,-n)
	}

	setCantidad(item, cantidad){
		var ya = this.Existe(item)
		if(ya.existe){this.cart[ya.index].cantidad += cantidad}
		return ya.existe
	}

	getCantidadTotal(){
		let cantidad = 0
		this.cart.forEach(item => cantidad += item.cantidad)
		return cantidad
	}

	getCodificado(){
		let codigo = ""
		this.cart.forEach(producto => codigo += `(${producto.item.codigo}/${producto.cantidad})`)
		return codigo
	}

	Existe(item){
		var index = indexPorCodigo(item.codigo)
		return {"index":index,"existe":index !=-1, "cantidad":item.cantidad}
	}

	indexPorCodigo(codigo){
		return this.cart.findIndex(p => p.item.codigo === codigo)
	}

	borrarCarro(){
		this.cart = [];
		this.total = 0;
		this.evento()
	}

	removeItem(item_a_remover){
		this.cart = this.cart.filter(carro => carro != item_a_remover)
		this.evento()
	}

	setDestino(destino){
		this.destino = destino.destino;
		this.envio   = destino.envio;
	}

	ShowCart(){
		return this.cart;
	}

	//fuerza un total, por si se aplica algun descuento o se cambia el precio a mano
	SetTotal(total){
		this.total = total;
		this.evento()
	}

	//suma un parcial, por si hay que agregar un costo adicional
	addParcial(parcial){
		this.total += parcial
	}

	//devuelve el total, pero lo recalcula primero
	ShowTotal(){
		this.CalcularTotal()
		return this.total;
	}

	//calcula el precio total del pedido unicamente.
	CalcularTotal(){
		this.total = 0;
		this.cart.forEach(item => {
			this.addParcial(item.item.precio * item.cantidad)
			}
		);
	}

	getEnvio(){
		return this.envio;
	} 

	borraItem(item){
		this.cart.splice(this.indexPorCodigo(item), 1)
		 this.evento()
	}

 	tablaPedidos(){
		let tabla = ""
  		if (this.cart != ""){
    		tabla = `<table class="table table-hover" id="tabla_pedidos_compuesta">
    	             <thead><tr><th scope="col">Producto</th>
    	                    	<th scope="col">Cantidad</th>
    	                    	<th scope="col">Precio</th></tr>
    	                    	<th scope="col"></th></tr>
    	             </thead><tbody>`
	
	    	this.cart.forEach(producto =>
				tabla += `<tr>
	    	    			<td>${mayuscula(producto.item.nombre)}</td> 
	    	        		<td>
	    	        			<button onclick="carro.restarProducto('${producto.item.codigo}')">-</button>
	    	        				${producto.cantidad}Kg 
								<button onclick="carro.sumarProducto('${producto.item.codigo}')">+</button>
	    	        		</td>
	    	        		<td>${producto.item.precio}$</td>
	    	        		<td><button onclick="carro.borraItem('${producto.item.codigo}')">X</button></td>
	    	       		  </tr>`
	       	)
	    	tabla += `<tr>
	    	            <td></td> 
	    	            <th>Total</th>
	    	           <th>${this.ShowTotal()}$</th>
	    	        </tr>`
	    	tabla +=`</tbody>
	    			</table>`
	    	}else{
				tabla= `<table class="table table-hover" id="tabla_pedidos_compuesta"><thead><tr>
    	                    <th scope="col">El carrito esta Vacio</th>
    	                </thead><tbody>
    	                	<td>Ingrese a la seción <a href="#productos" onclick="cargar_contenido('productos')">Productos</a> para seguir comprando</td></tr>
    	                </tbody></table>`
	    	}
	   	return tabla;
	}	
}



//Creo el objeto del pedido y recupero el guardado en el local storage, si existe y si el usuario quiere.
let pedir = leeLocal("carrito")
    if (pedir && pedir.cart.length > 0 && confirm("¿Desea continuar con la compra anterior?")) {} 
    else {
    	pedir = ""
	}
let carro = new pedido(pedir);