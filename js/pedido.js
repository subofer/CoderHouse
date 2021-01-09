class Pedido {
	constructor() {
		this.cart = [];	
		this.total = 0;
		this.envio = 0;
	}

	addNewItem(item){
		this.cart.push(item);
	}

	removeItem(itemAremover){
		this.cart = this.cart.filter(
			carro => carro != itemAremover
			);
	}

	setDestino(destino){
		this.destino 	= destino[0];
		this.envio  	= destino[1];
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
		for (const item of this.cart) {     //<--- aca es como si fuera un forEach
			this.total += item.getPrecioTotal();
		};
		this.SetTotal(this.total + this.CalcularEnvio);
	}

	CalcularEnvio(){
		return this.envio;
	} 

}