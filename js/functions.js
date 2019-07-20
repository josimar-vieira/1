$(function(){
	$(".menu-mobile").click(function(){
  $(".menu-mobile ul").fadeToggle();
    // efeitopara menu mobile
})
})


$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('href');
         var offsettop = $(href).offset().top;

        $('html,body').animate({'scrolltop':offsettop});
        // efeito para navegar pelos links
	})
  })

$(function(){
	$(document).ready(function(){
	$(".botao").animate({left: '200px'});
	// efeito no botao para desktop
});
})

$(function(){
$(document).ready(function(){
	$(".banner-capa").animate({left:'00px'});
	// efeito no botao para desktop
});
})

$(function(){
$(document).ready(function(){
	$(".msg3-desktop").animate({left: '00px'});
});
})























