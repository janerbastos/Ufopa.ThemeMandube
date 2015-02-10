
$(document).ready(main);
 
	var contador = 1;
 
	function main () {
		$('.menu_bar span').click(function(){
			if (contador == 1) {
				$('nav').animate({
				left: '4.5%'
			});
			contador = 0;
			} else {
				contador = 1;
				$('nav').animate({
				left: '-100%'
			});
			}	
		});
 
	}

	
