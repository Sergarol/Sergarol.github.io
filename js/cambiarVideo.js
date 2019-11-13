let arrayVideos;
let video = document.getElementById('video')

let l1 = document.getElementById('vid1'),
l2 = document.getElementById('vid2'),
l3 = document.getElementById('vid3'),
l4 = document.getElementById('vid4')

l1.addEventListener('click', ()=>cambiarVideo(0))
l2.addEventListener('click', ()=>cambiarVideo(1))
l3.addEventListener('click', ()=>cambiarVideo(2))
l4.addEventListener('click', ()=>cambiarVideo(3))

switch(document.title){
	case 'Intel':
		arrayVideos = new Array('aVLuKqfyVyw', 'oCSkyNHXIAE', 'F92byoMgptU', '3rOVfeujof4')
		break
}

function cambiarVideo(n){
	video.src='https://www.youtube.com/embed/' + arrayVideos[n]
}