

$(function(){
	// 最新成交车的引入
	$.ajax({
		url:"../json/sellcar.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<li><img src = "'+ data[i].src +'"/><p class="deal-p1">' + data[i].p1 + '</P><p class="deal-p2">' + data[i].p2 + '</p><p class="deal-p3">'+data[i].p3[0]+'<em>' + data[i].p3[1]+'</em>&emsp;' +data[i].p3[2] +'<i>' +data[i].p3[3] + '</i></p><div class="deal-day">' + data[i].div1[0] + '<br/><em>' + data[i].div1[1] +'</em></div></li>'
			}

			html = '<div class="deal-list-wrapper clearfix">'+html+'</div>'
			$(".deal-list").html(html);

//=================================================
//最新成交车辆滚动
			var timer = null;
			var iNow = 0;
			function tab(){
				$(".deal-list-wrapper").animate({left: -(parseInt($(".deal-list-wrapper").find("li").outerWidth(true))) * iNow},
					function(){
					 if(iNow == $(".deal-list-wrapper").find("li").size()){
					 	iNow = 0;
					 	$(".deal-list-wrapper").find("li").css("opacity",0);
					 }
				})
				$(".deal-list-wrapper").find("li").eq(iNow).css("opacity",1);
				$(".deal-list-wrapper").find("li").eq(iNow + 1).css("opacity",1);
				$(".deal-list-wrapper").find("li").eq(iNow + 2).css("opacity",1);
				$(".deal-list-wrapper").find("li").eq(iNow + 3).animate({opacity:1},1000)
			}
			function addnum(){
				iNow++;
				tab();
			}
			timer = setInterval(addnum,3000);
//=============================================================
			
		}
	})
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

})	

		