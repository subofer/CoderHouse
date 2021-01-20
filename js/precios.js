document.getElementById("tabla_precios").innerHTML +=Tabla_precios(productos)

//Genera la Tabla de precios utilizando los datos del archivo "productos.json"
function Tabla_precios(productos){
    
    let tabla = `<table class="table table-hover" id="productos">
                    <thead><tr>
                        <th scope="col" colspan="1">Producto</th>
                        <th scope="col" colspan="1">Variedad</th>
                        <th scope="col">Precio</th></tr>
                    </thead><tbody>`

    productos.forEach(familia =>{
        
        tabla += `<tr><th class="align-middle" scope="row" rowspan=${familia.productos.length + 1}>
                        ${mayuscula(familia.tipo)}
                  </th></tr>`
        
        familia.productos.forEach(
            producto => tabla += `<tr>
                                    <td>${mayuscula(producto.variedad)}</td> 
                                    <td>${producto.precio}$</td>
                                  </tr>`
            )
        }
    )
    return tabla;
}

