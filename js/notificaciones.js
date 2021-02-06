function Notificacion(mensaje, opciones = {"color":"white","alto":50,"top":50, "left":50,"aire":5}){

//encuentro la ubicación de la ultima para colocar la nueva.
let lista_notificaciones = $('[class^="notificacion_"]')

lista_notificaciones.each( index => {
	let actual = $(`.notificacion_${index}`)
	actual.css("top", parseInt(actual.css("top")) + opciones.alto + opciones.aire +"px" )
});

let style = `
	position: fixed;
	width: auto;
	text-align: center;
	vertical-align: middle;
	background:rgba(0,0,0,.6);
	padding: 0px 10px 0px 10px;
	
	top: ${opciones.top}px;
	left: ${opciones.left}px;
	
	color: ${opciones.color};
	
	height: ${opciones.alto}px;
	line-height: ${opciones.alto}px;
	border-radius: ${opciones.alto/3}px;
	
	z-index:9999; 
	`

let noti = `<div class="notificacion_${lista_notificaciones.length}" style="${style}">${mensaje}</div>`
$("body").append(noti)

let ultima = $('[class^="notificacion_"]').last()
  //let ultima = lista_notificaciones.last()

  setTimeout(function(){
  	ultima.fadeOut(1200)
		setTimeout(function(){
  			ultima.remove()	
   			},1300);
   },1300);

 

 setTimeout(function(){
  			lista_notificaciones.remove()	
   			},5000);
   
}



/*

let notificaciones = new MotorNotificaciones()


//creo un espacio donde almacenar las notitificaciones
//cada vez que creo una notificacion, muevo el resto para abajo o para arriba, segun dependa
//las notificaciones individuales tienen un horario de vencimiento
//al alacanzar el vencimiento se borran de la lista del render.

class MotorNotificaciones{

	constructor() {
		this.lista_notificaciones = []
		this.style = this.SetEstilo()
	}

	Notificar(mensaje){
		let index = this.CrearNotificacione(mensaje)
		this.render(index)
	}

	render(index){
		//muestra la notificacion
		//planea su eliminación
	}

	CrearNotificacione(mensaje){
		this.lista_notificaciones.push("mensaje":this.html(mensaje), "numero":this.lista_notificaciones)
	}

	html(mensaje, numero){
		return `<div class="notificacion_${numero}" style="${this.style}">${mensaje}</div>`
	}

	SetEstilo(opciones = {"color":"white","alto":50,"top":50, "left":50,"aire":5}){

	return `position: fixed;
			width: auto;
			text-align: center;
			vertical-align: middle;
			background:rgba(0,0,0,.6);
			padding: 0px 10px 0px 10px;
			
			top: ${opciones.top}px;
			left: ${opciones.left}px;
			
			color: ${opciones.color};
			
			height: ${opciones.alto}px;
			line-height: ${opciones.alto}px;
			border-radius: ${opciones.alto/3}px;
			
			z-index:9999; 
			`
	}


}

*/



