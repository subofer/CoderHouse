class Productos {

  constructor(item,cantidad) {

    this.familia	= item[0];
    this.especie	= item[1];
    this.precio		= item[2];
    this.cantidad	= cantidad;

  }

  getPrecioTotal(){
  	return this.precio * this.cantidad ;
  }

  getPrecio(){
  	return this.precio ;
  }

  setCantidad(cantidad){
  	this.cantidad = cantidad;
  }

}
