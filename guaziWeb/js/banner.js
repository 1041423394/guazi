define(function(){
	var banner = function(){
		var i = 0;
		var timer;
		$(".slide-img").eq(0).show().siblings(".slide-img").hide();
		showTime();
		$(".banner").hover(function(){
			$(".slide-ctrl").css("display", "block");
		},function(){
			$(".slide-ctrl").css("display", "none");
		})
		$(".slide-dot").hover(function(){
			i = $(this).index();
			Show();
			clearInterval(timer);
		},function(){
			showTime();
		})
		
		$(".slide-prev").click(function(){
			clearInterval(timer);
			if(i == 0){
				i = 3;
			}
			i--
			Show();
			showTime();
		})
		$(".slide-next").click(function(){
			clearInterval(timer);
			if(i == 2){
				i = -1;
			}
			i++;
			Show();
			showTime();
		})
		
		function showTime(){
			timer = setInterval(function(){
				Show();
				i++;
				if(i == 3){
					i = 0;
				}
			}, 2000)
		}
		function Show(){
			$(".slide-img").eq(i).fadeIn(300).siblings(".slide-img").fadeOut(300);
			$(".slide-dot").eq(i).addClass("active").siblings(".slide-dot").removeClass("active");
			if($(".slide-img").eq(i).index() == 2){
//				alert(1)
				$(".nav-list a").css("color", "#fff");
				$(".city-curr").css("color", "#fff");
				$(".head-phone").css("color", "#fff");
				$(".head-login a").css("color", "#fff");
				$(".nav-list").find("a").hover(function(){
					$(this).css("color", "#22AC38");
				},function(){
					$(this).css("color", "#fff");
				})
				$(".head-login a").hover(function(){
					$(this).css("color", "#22AC38");
				},function(){
					$(this).css("color", "#fff");
				})
			}else{
				$(".nav-list a").css("color", "#333");
				$(".city-curr").css("color", "#495056");
				$(".head-phone").css("color", "#22AC38");
				$(".head-login a").css("color", "#495056");
				$(".nav-list").find("a").hover(function(){
					$(this).css("color", "#22AC38");
				},function(){
					$(this).css("color", "");
				})
				$(".head-login a").hover(function(){
					$(this).css("color", "#22AC38");
				},function(){
					$(this).css("color", "#495056");
				})
			}
		}
	}
	return {
		banner:banner
	}
})
