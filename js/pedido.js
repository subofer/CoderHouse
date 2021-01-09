class Pedido {
	constructor() {
		this.cart = [];	
		this.total = 0;
		this.envio = 0;
	}

	addItem(item){
		this.cart.push(item);
	}

	removeItem(item_a_remover){
		this.cart = this.cart.filter(
			carro => carro != item_a_remover
			);
	}

	setDestino(destino){
		this.destino 	= destino.destino;
		this.envio  	= destino.envio;
	}

	ShowCart(){
		return this.cart;
	}

	SetTotal(total){
		this.total = total;
	}

	ShowTotal(){
		return this.total;
	}

	CalcularTotal(){
		let parcial = 0;
		
		this.cart.forEach(function(item){
			parcial += item.getPrecioTotal();
		});
			
		this.SetTotal(parcial + this.getEnvio());
		this.ShowTotal();
	}

	getEnvio(){
		return this.envio;
	} 

}