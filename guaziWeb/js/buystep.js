define(function(){
	var buystep = function(){
		var i = 0;
		var timer;
		setTime();
//		$(".items-li").mouseenter(function(){
			$(".items-li").click(function(){
				i = $(this).index();
//			alert(i)
				$(this).addClass("active").siblings().removeClass("active");
				$("list-img").eq(i).fadeIn(300).siblings().fadeOut(300);
				clearInterval(timer);
			})
			
//			show();
//			setTime();
//			clearInterval(timer);
//		})
		/*$(".items-li").mouseout(function(){
			setTime();
		})*/
		
		function show(){
			
			$(".list-img").eq(i).animate({opacity:0,left:"-200px"},300);
			
			$(".list-img").eq(i+1).css("left",0).animate({opacity:1},300);
			$(".items-li").eq(i+1).addClass("active").siblings().removeClass("active");
			
			console.log(i)
			
		}
		function setTime(){
			timer = setInterval(function(){
			show()	
			i++
			if(i == 3){
				i = -1;
			}
			
			},2000)
		}
		
		
		
		
		
		
		
		
		
	}
	return {buystep:buystep}
})
