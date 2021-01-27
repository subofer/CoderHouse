function Notificacion(mensaje, opciones = {"color":"red","alto":50,"top":50}){

//	busco notificaciones anteriores y las subo cuando borro la actual.
let alto_notif = opciones.alto
let top = opciones.top

//encuentro la ubicación de la ultima para colocar la nueva.
let lista_notificaciones = $('[class^="notificacion_"]')

lista_notificaciones.each( index => {
	var tope = parseInt($(`.notificacion_${index}`).css("top"))
	$(`.notificacion_${index}`).css("top", tope + alto_notif + 5 +"px" )
});

let style = `
	position: relative;
	position: fixed;
	top: ${top}px;
	left: 50px;
	width: auto;
	height: ${alto_notif}px;
	text-align: center;
	color: white;
	vertical-align: middle;
	line-height: ${alto_notif}px;
	padding: 0px 10px 0px 10px;
	z-index:9999; 
	background:rgba(0,0,0,.6);
	border-radius: ${alto_notif/3}px;
	`
$("body").append(`<div class="notificacion_${lista_notificaciones.length}" style="${style}">${mensaje}</div>`)

let ultima = $('[class^="notificacion_"]').last()
  setTimeout(function(){
  	ultima.fadeOut(2000)
		setTimeout(function(){
  			ultima.remove()	
   			},2100);
   },3000);
}





