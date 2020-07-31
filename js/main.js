 $(function(){
           $('dd[id != "acc1"]').css({"height":"0px","padding":"0px"});
           $('dt > a').click(function(){
                var target = $(this).attr("href");
                var currentArrow = $('.current').prev('dt').children('a').children('.acc-arrow');
                var targetArrow = $(this).children('.acc-arrow');
                if($(target).hasClass('current')){
                    return false;
                }
                $(currentArrow).attr('src','img/down_arrrow.png');
                $('.current').animate({"height":"0px","padding":"0px"},200);
                $(targetArrow).attr('src','img/up_arrow.png');
                $(target).animate({"height":"180px","padding":"20px"},200);
                $('dd').removeClass('current');
                $(target).addClass('current');
               return false; 
            });
	 		$(window).scroll(function(){
				
				if($(window).scrollTop() >= 0 && $(window).scrollTop() < 500){
					$('.gradient-wrapper').addClass('active');
				}else{
					$('.gradient-wrapper').removeClass('active');
				}
			});
        });
    