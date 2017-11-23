//页内导航模块
define( function(){
	var detail = function(){
		$(".nav-l").on("click","li",function(){
			$(".nav-l").find("li").attr("class", "");
			$(this).attr("class", "on");
		});
		$(window).scroll(function(){
			var sideStrolltop = $(".top-nav").offset().top;
			if(sideStrolltop > 609){
				$(".top-nav").show();
				
			}else{
				$(".top-nav").hide();
			}
		})
		
	}
	return {
		detail: detail
	}
})