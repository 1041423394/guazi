define(function(){
	var popUp = function(){
		// 弹框
	$("#step1").on("click",function(){
		$(".js-pop-sell-01").css("display","none");
		$(".pop-sell-2").css("display","block");
	})
	$("#step2").on("click",function(){
		$(".pop-sell-2").css("display","none");
		$("#login1").css("display","block");
	})
	$(".js-checkcode").on("click",function(){
		$("#login1").css("display","none");
	})
	$(".pop-close").on("click",function(){
		$(".js-pop-sell-01").css("display","none");
		$(".pop-sell-2").css("display","none");
	})
	$("#closeLogin1").on("click",function(){
		$("#login1").css("display","none");
	})




}
	return {popUp:popUp}
})