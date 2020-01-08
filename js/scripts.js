let navbar = document.getElementById('navbar')
let cartas = document.getElementById('cartas')
let carousel = document.getElementById('carousel')
let esc1 = document.getElementById('esc1')
let esc2 = document.getElementById('esc2')
let esc3 = document.getElementById('esc3')
let alert = document.getElementById('alert')
let link = document.getElementById('link')

document.addEventListener("scroll", addFixedNav)
document.addEventListener("DOMContentLoaded", cargarCartas)
cartas.addEventListener("click", moverCarta)
esc1.addEventListener("click", ()=> crearLink("https://www.escuderiaciudadelaceramica.com"))
esc2.addEventListener("click", ()=> crearLink("https://www.escuderiacerronegro.com"))
esc3.addEventListener("click", ()=> crearLink("https://www.yacarcross.es"))

function addFixedNav(){
	if (window.pageYOffset>window.innerHeight/2) {
		navbar.classList.add('fixed-top')
		carousel.style.marginBottom = "100px"
	}else{
		navbar.classList.remove('fixed-top')
		carousel.style.marginBottom = "0"
	}
}

function cargarCartas(){
	cartas.children[0].style.zIndex = 0
	cartas.children[1].style.zIndex = 1
	cartas.children[2].style.zIndex = 3
	cartas.children[3].style.zIndex = 1
	cartas.children[4].style.zIndex = 0

	cartas.children[0].style.marginRight = "-120px"
	cartas.children[1].style.marginRight = "-120px"
	cartas.children[0].style.transform = "scale(0.9)"
	cartas.children[1].style.transform = "scale(0.95)"

	cartas.children[3].style.marginLeft = "-120px"
	cartas.children[4].style.marginLeft = "-120px"
	cartas.children[3].style.transform = "scale(0.95)"
	cartas.children[4].style.transform = "scale(0.9)"

	for(let i = 0; i<5; i++)
		cartas.children[i].style.boxShadow = "0 0 10px 3px #000"
}

function moverCarta(event){
	if(event.target.parentNode.classList[0]=="card"){
		let aux = event.target.parentNode.innerHTML
		event.target.parentNode.innerHTML = cartas.children[2].innerHTML
		cartas.children[2].innerHTML = aux
	}
}

function crearLink(href){
	alert.classList.remove("d-none")
	link.href = href
}