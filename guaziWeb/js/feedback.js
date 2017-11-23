define(function(){
	var feedback = function(){
		
		$(".feedback-bar").click(function(){
			$(".pop-box").css("display", "block");
			$(".mask-feed").css("display", "block");
			$("body").css("overflow", "hidden")
		})
		
		$(".pop-close").click(function(){
			$(".pop-box").css("display", "none");
			$(".mask-feed").css("display", "none");
			$("body").css("overflow", "auto")
		})
		
		$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 609){
				$(".fix-icon-backtop").css("display", "block")
			}else{
				$(".fix-icon-backtop").css("display", "none")
			}
		})
		$(".fix-icon-backtop").click(function(){
			   $("html,body").scrollTop(0);
		})
		
		
		$(".feedbacktype").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
		})
		
		
		
	}
	return {feedback:feedback}
})