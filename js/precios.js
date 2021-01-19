/*var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
};



function TablaPrecios(elemento){
    let cabecera_tabla = `<table class="table table-hover" id="productos">
                            <thead><tr>
                                <th scope="col" colspan="1">Producto</th>
                                <th scope="col" colspan="1">Variedad</th>
                                <th scope="col">Precio</th></tr>
                            </thead><tbody>`
    

    let table_ths;
    var categoryNames = groupBy(elemento, 'familia');
    var keys = Object.keys(categoryNames);
        i=0;
            keys.forEach(familia => {  
                        table_ths[i]=`<tr>
                            <th class="align-middle" scope="row" 
                            rowspan=${categoryNames[familia].lengt()}>
                            ${familia}</th></tr>`
                        i++;
                    })
         


            let lista = categoryNames[familia];
            lista.forEach(producto => tarjetas.innerHTML +=Tarjeta(producto))

        let contenido_tabla = 


}



`



    <tr>
        <td>${nombre}Peceto</td> 
        <td>${precio}</td>
    </tr>
    </tbody>
</table>`

*/




//leo objeto, miro familia si familia === familia anterior, sumo 1 al row.
function Tabla_precios(listado){
    let contenido_tabla = "";
    let cabecera_tabla = `<table class="table table-hover" id="productos">
                            <thead><tr>
                                <th scope="col" colspan="1">Producto</th>
                                <th scope="col" colspan="1">Variedad</th>
                                <th scope="col">Precio</th></tr>
                            </thead><tbody>`

    
    let groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };




let porFamilia = groupBy(listado, 'familia');
let familiares = Object.keys(porFamilia)
let Th;

console.log(porFamilia);
console.log(familiares);

console.log(listado);

familiares.forEach(familia =>{
    Th = `<tr>
        <th class="align-middle" scope="row" 
        rowspan=${familia[0].lengt()}>
    ${familia}</th></tr>`
    console.log(Th);
    porFamilia.forEach(producto =>{
            
            contenido_tabla += `<tr>
                                <td>${producto.variedad}</td> 
                                <td>${producto.precio}</td>
                            </tr>`
                
       
        })
        contenido_tabla = Th + contenido_tabla;
    })
    return cabecera_tabla + contenido_tabla
}


console.log (Tabla_precios(productos));

//Tabla_precios(productos);