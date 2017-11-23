define(function(){
	var suspend = function(){
		// 顶部悬浮
		window.onscroll = function(){
			if($(window).scrollTop() >= 500){
				$(".fix-top").css("display","block");
			}else{
				$(".fix-top").css("display","none");
			}
		}	
		$("#js-yearinput").on("click",function(){
			$("#js-yearinput").find($(".pr")).css("display","none");
		})
	}
	return {suspend:suspend}
})