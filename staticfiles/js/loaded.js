window.addEventListener('load',init)

function init(){
	// scroll navbar
	const nav_fix = document.querySelector('.navbar');
	
	// Loaded Pages
	const body = document.querySelector('body');
	body.classList.add('loaded');
	
	//Validation of scroll
	window.onscroll = function(){
		const scroll = document.documentElement.scrollTop;
		if(scroll > 10){
			nav_fix.classList.add('fix');
		}
		else if(scroll == 0){
			nav_fix.classList.remove('fix');
		}
	}
}