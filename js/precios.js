let precios = document.getElementById("tabla_precios")
precios.innerHTML +=Tabla_precios(productos)

function Tabla_precios(productos){
let contenido_tabla;
let cabecera_tabla = `<table class="table table-hover" id="productos">
                            <thead><tr>
                                <th scope="col" colspan="1">Producto</th>
                                <th scope="col" colspan="1">Variedad</th>
                                <th scope="col">Precio</th></tr>
                            </thead><tbody>`


    productos.forEach(familia =>{
        contenido_tabla += `<tr>
                            <th class="align-middle" scope="row" 
                                rowspan=${familia.productos.length + 1}>
                                ${familia.tipo}</th>
                            </tr>`
        familia.productos.forEach(
            producto => contenido_tabla += `<tr>
                                                <td>${producto.variedad}</td> 
                                                <td>${producto.precio}</td>
                                            </tr>`
            )
        }
    )
    return cabecera_tabla + contenido_tabla
 }