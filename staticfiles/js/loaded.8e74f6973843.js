window.addEventListener('load',init)

function init(){
	// scroll navbar
	const nav_fix = document.querySelector('.navbar');
	const whatsapp = document.querySelector('.fab .fa-whatsapp');
	const whatsapp_animate = document.querySelector('#link-whatsapp i')
	
	// Loaded Pages
	const body = document.querySelector('body');
	body.classList.add('loaded');
	
	//Validation of scroll
	window.onscroll = function(){
		const scroll = document.documentElement.scrollTop;
		if(scroll > 10){
			nav_fix.classList.add('fix');
		}
		if(scroll >= 2647 || scroll >= 1762){
			whatsapp_animate.classList.add('animate__animated');
			whatsapp_animate.classList.add('animate__bounce');
			whatsapp_animate.classList.add('animate__delay-1s');
		}
		else if(scroll == 0){
			nav_fix.classList.remove('fix');
		}
		else{
			whatsapp_animate.classList.remove('animate__animated');
			whatsapp_animate.classList.remove('animate__bounce');
			whatsapp_animate.classList.remove('animate__delay-1s');
		}
	}

	// whatsapp
	whatsapp.href = 'https://api.whatsapp.com/send?phone=593994398568&text=Hola!%20Quiera%20apartar%20una%20cita!'
}