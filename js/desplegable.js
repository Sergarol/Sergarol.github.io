let des = document.getElementById('desplegable')
let botonDes = document.getElementById('botonDes')

botonDes.addEventListener('click', playAnim)

function playAnim(){
	if(des.style.width == '300px'){
		botonDes.style.animation = 'cambiarIconoR 1s linear'
		setTimeout(cambiarIcono, 500)
		des.style.animation = 'contraerMenu 1s'
		des.style.width = '50px'
		des.style.height = '50px'
		des.children[1].style.animation = 'esconderLista 1s'
		des.children[1].style.opacity = '0'
		des.children[1].style.display = 'none'
	}else{
		botonDes.style.animation = 'cambiarIcono 1s linear'
		setTimeout(cambiarIcono, 500)
		des.style.animation = 'despMenu 1s'
		des.style.width = '300px'
		des.style.height = '375px'
		des.children[1].style.animation = 'aparecerLista 1s'
		des.children[1].style.display = 'block'
		des.children[1].style.opacity = '1'
	}
	
}

function cambiarIcono(){
	if(botonDes.classList.contains("fa-grip-lines")){
		botonDes.classList.replace("fa-grip-lines", "fa-times")

	}
	else if (botonDes.classList.contains("fa-times")){
		botonDes.classList.replace("fa-times", "fa-grip-lines")
	}
}