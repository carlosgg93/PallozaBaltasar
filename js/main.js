jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	$('.go-top').click(function(){
		$('body,html').animate({scrollTop : 0}, 500);
		return false;
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});

	// $('.dropdown-toggle').click(function(){
	// 	location.href='fotos-palloza.html'
	// });

	$('#localizacion').click(function(){
		location.href='como-llegar.html'
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows',
			filter: $("#primero").attr('data-filter')
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			data:"nombrePersona="+$("input[name='nombrePersona']").val()+"&apellidoPersona="+$("input[name='apellidoPersona']").val()+"&telefonoPersona="+$("input[name='telefonoPersona']").val()+"&emailPersona="+$("input[name='emailPersona']").val()+"&asuntoCorreo="+$("input[name='asuntoCorreo']").val()+"&mensajeCorreo="+$("textarea[name='mensajeCorreo']").val(),
			type: "POST",
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Enviando el correo...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
});