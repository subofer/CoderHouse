class pedido {
	constructor() {
		this.cart = [];	
		this.total = 0;
		this.envio = 0;
	}

	addItem(item,cantidad){
		this.cart.push({item, cantidad:cantidad});
		console.log(this.cart)
	}

	removeItem(item_a_remover){
		this.cart = this.cart.filter(
			carro => carro != item_a_remover
			);
	}

	borrarCarro(){
		this.cart = [];
		this.total = 0;
	}

	setDestino(destino){
		this.destino = destino.destino;
		this.envio   = destino.envio;
	}

	ShowCart(){
		return this.cart;
	}

	SetTotal(total){
		this.total = total;
	}
	addParcial(parcial){
		this.total += parcial
	}

	ShowTotal(){
		this.CalcularTotal()
		return this.total;
	}

	CalcularTotal(){
		this.total = 0;
		this.cart.forEach(item => {
			this.total += item.item.precio;
		});
		
	}

	getEnvio(){
		return this.envio;
	} 
}


let carro = new pedido();