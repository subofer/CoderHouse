class Productos {

  constructor(json) {
   this.listado = json
   this.familias = this.getFamilias()
  }

  //version resumida
  porId(id){
    return this.getProductById(id)
  }

  getProductById(id){
     return this.listado.find(p => p.codigo === id)
   }

  getFamilias(){
   let porfamilia = []; let n;
   this.listado.forEach(item => {
      
      var fam = porfamilia.find(element => element.tipo === item.familia);
      
      if (!fam){porfamilia.push({tipo: item.familia, cantidad: n=2, productos:[item]})}
      else{
            n++; fam.cantidad = n;
            fam.productos.push(item)
          }
    })
     return porfamilia
   }

  getPrecio(id){
      return this.getProductById(id).precio
   }

  getNombre(id){
      return this.getProductById(id).nombre
   }

  TablaPrecios(){

    let tabla = `<table class="table table-hover" id="productos">
                    <thead><tr>
                        <th scope="col" colspan="1">Producto</th>
                        <th scope="col" colspan="1">Variedad</th>
                        <th scope="col">Precio</th></tr>
                    </thead><tbody>`

    this.familias.forEach(familia =>{
        tabla += `<tr>
                    <th class="align-middle" scope="row" rowspan=${familia.cantidad}>
                        ${mayuscula(familia.tipo)}
                    </th>
                  </tr>`
        
        familia.productos.forEach(producto => 
          tabla += `<tr>
                      <td>${mayuscula(producto.variedad)}</td> 
                      <td>${producto.precio}$</td>
                    </tr>`
            )
        }
    )
    return tabla;
}

  //Genera las tarjeas de productos
  getTarjeta(id){
    let item = this.getProductById(id)
    if (item.mostrar){return this.MakeTarjeta(item)}
    else{return ""}
  }
  
  getTarjetas(){
    let salida=[];
      this.listado.forEach(producto => salida += this.getTarjeta(producto.codigo))
    return salida
  }
  

  MakeTarjeta(elemento){
    let botonPop =`<span class="ns-btna"><button data-familia="${elemento.familia}" data-id="${elemento.codigo}"
                    type="button" class="btn btn-danger botonCompra">Agregar al carrito</button></span>`
    let botondw =`<span class="ns-btn"><a data-dir="dwn"><span class="icon-minus"></span></a></span>`
    let botonUp =`<span class="ns-btn"><a data-dir="up"><span class="icon-plus"></span></a></span>`
    
    let inputSpiner =`<div class="number-spinner">
                        ${botondw}
                        <input id="cantidad_${elemento.codigo}" type="text" class="pl-ns-value" value="1" maxlength=2>
                        ${botonUp} ${botonPop}
                      </div>`
    let respuesta=
              `<div class="col-12 col-md-6 col-xl-4 d-flex align-items-stretch cartas_productos">
                <div id="${elemento.familia}_${elemento.variedad}" class="card mt-3">
                  <img class="card-img-top" src="${elemento.img}" alt="${elemento.nombre}">
                  
                  <div class="card-body">
                    <h5 class="card-title">${mayuscula(elemento.nombre)}</h5>
                    <div class="botonera_productos">${inputSpiner}</div>                
                    <p class="card-text"></p>
                    <p class="card-text">${elemento.texto}</p>
                    <p class="card-text"></p>


                  </div>
                </div>
              </div>`
    return respuesta;
  }
}

let prod = new Productos(productos)

