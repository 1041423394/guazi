define(function(){
	var judge = function(){
		// 手机号的判断
	$(".phone-btn-1").on("click",function(){
		var oValue = $(".js-phone-input").val().replace(/\s/ig,'');
		if(!$(".js-phone-input").val()){
			$(".js-phone-input").val(" ");
			$(".phone-error-4").css("display","block");
		}else if(/^1\d{10}$/.test(oValue)){
			$(".js-pop-sell-01").css("display","block");
		}else{
			$('.js-phone-error-2').css("display","block");
			$(".phone-error-4").css("display","none")
		}
	})
	$(".js-phone-input").on("click",function(){
		$(".phone-error-4").css("display","none");
		$('.js-phone-error-2').css("display","none");
	})
}
	return {judge:judge}
})
