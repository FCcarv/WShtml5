$(function(){

	//DESLIZA O MENU
	$('.main-menu a[class!="special"]').click(function() {
		var goto = $('.'+$(this).attr('href').replace('#','')).position().top;
		$('html, body').animate({scrollTop:goto - $('.main-header').outerHeight()}, 1000);
		return false;
	});

	/*SUSPENDE O MENU
	scrollTop -> pega a distancia do topo
	outerHeight -> altura do menu da borda pra fora.
	*/
	$(window).scroll(function(){
		if($(this).scrollTop() > $('.main-header').outerHeight() + 150){
			$('body').css('padding-top', $('.main-header').outerHeight());
			$('.main-header').addClass('main-header_fixed');
			$('.j_back').fadeIn(500);
		}else{
			$('body').css('padding-top','0');
			$('.main-header').removeClass('main-header_fixed');
			$('.j_back').fadeOut(500);
		}
		
	});

	//BACK  TOPO
	$('.j_back').click(function() {
		$('html, body').animate({scrollTop:0}, 1000);
	});

	//FORM SUBMIT
	$('.j_formsubmit').submit(function(){
	 var dados = $(this).serialize();

	$.ajax({
			url: 'js/ajax.php',
			data: dados,
			type: 'POST',
		   dataType: 'json',		

			beforeSend:function() {
				$('.form_load').fadeIn();
			},
		success:function(data) {
			 console.clear();
		     console.log(data);
		$('.form_load').fadeOut();
		alert("Olá" + data.nome +" , Obrigado por enviar sua mensagem!!");
	 	}
	});	
		
		return false;
	});

});
