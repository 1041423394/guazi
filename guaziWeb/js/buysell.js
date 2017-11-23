define(function(){
	var buysell = function(){
		$(".search-box").on("click", ".search-input", function(e){
			$(".search-box").find("div").addClass("open");
			$(".search-box").css("background-color", "#fff");
			$(".search-input").css("background-color", "#fff");
			
			return false;
		})
		
		$(".item").click( function(){
			alert(1)
			var html = $(".search-input").val();
			html = $(this).html();
			$(".search-input").val(html);
			
		})
		$(document).bind("click",function(){
				$(".search-box").find("div").removeClass("open");
				$(".search-box").css("background-color", "#F5F5F7");
				$(".search-input").css("background-color", "#F5F5F7");
			
		})
	}
	return {buysell:buysell}
})