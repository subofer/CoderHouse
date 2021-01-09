class Productos {

  constructor(item,cantidad) {

    this.familia  = item.familia;
    this.especie  = item.especie;
    this.precio   = item.precio;
    this.cantidad = cantidad;

  }

  getPrecioTotal(){
  	return this.precio * this.cantidad ;
  }

  getPrecio(){
  	return this.precio ;
  }

  setPrecio(valor){
    this.precio = valor;
  }

  setCantidad(cantidad){
  	this.cantidad = cantidad;
  }

}
