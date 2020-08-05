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
            $(".slider1 > .left-arrow").click(function(){
                clearInterval(timer1);
                timer1 = setInterval(forwardSlider,3000);
                forwardSlider();
            });
            $(".slider1 > .right-arrow").click(function(){
                clearInterval(timer1);
                timer1 = setInterval(forwardSlider,3000);
                reverseSlider();
            });
            $(".slider2 > .left-arrow").click(function(){
                clearInterval(timer2);
                timer2 = setInterval(forwardSlider2,3000);
                forwardSlider2();
            });
            $(".slider2 > .right-arrow").click(function(){
                clearInterval(timer2);
                timer2 = setInterval(forwardSlider2,3000);
                reverseSlider2();
            });
     
            $('.slider1 > .message').prepend($('.slider1 li:last-child'));
            $('.slider1 > .message').css("left",-1200);
     
     
            var timer1 = setInterval(forwardSlider,3000);
            function forwardSlider(){
                $('.slider1 > .message').animate({"left":"-=1200px"},1000,function(){
                $(this).append($('.slider1 li:first-child'));
                $(this).css("left",-1200);
                });
            }
            function reverseSlider(){
                $('.slider1 > .message').animate({"left":"+=1200px"},1000,function(){
                $(this).prepend($('.slider1 li:last-child'));
                $(this).css("left",-1200);
                });
            }
            $('.slider2 > .message').prepend($('.slider2 li:last-child'));
            $('.slider2 > .message').css("left",-1200);
     
     
            var timer2 = setInterval(forwardSlider2,3000);
            function forwardSlider2(){
                $('.slider2 > .message').animate({"left":"-=1200px"},1000,function(){
                $(this).append($('.slider2 li:first-child'));
                $(this).css("left",-1200);
                });
            }
            function reverseSlider2(){
                $('.slider2 > .message').animate({"left":"+=1200px"},1000,function(){
                $(this).prepend($('.slider2 li:last-child'));
                $(this).css("left",-1200);
                });
            }
            $(".burger-icon > img").click(function(){
               $(".burger-menu").css("right",0); 
                $(".cover").show();
            });
            $(".cover").click(function(){
               $(".burger-menu").css("right","-100%");
                $(".cover").hide();
            });
     
            
            
            
        });
    