define(function(){
	var detailImg = function(){
		/*$(.prev).click(function(){
			$('li').find()
		})*/
		$('.smallimgbox').on('mouseover','li',function(){
			showImg($(this).index());
			
		})
		var nodeSize = $('.smallimgbox').find('li').size();
		$('.smallimgbox').find('.wrapper-next').css("width",nodeSize * 124);
		var html = '<span class="f20">1</span>/' +  nodeSize+'';
		$('.page-number').html(html); 
		
		$('.next').click(function(){
			var _index = $('.onimg').index();
			_index = _index +1;
			if(_index > nodeSize - 1){
				_index = nodeSize - 1;
			}else if(_index % 4 ==0){
				imgAnimate(Math.floor(_index/4)*-443);
			}
			showImg(_index);
		})
		$('.prev').click(function(){
			var _index = $('.onimg').index();
			_index = _index -1;
			if(_index < 0){
				_index = 0;
			}else if(_index % 4 ==0){
				
				var _left = (Math.floor(_index/4)-1)*-443;
				if(_left >0){
					_left = 0;
				}
				imgAnimate(_left);
			}
			showImg(_index);
		})
		
		$('.next-smallimg').click(function(){
			$('.prev-smallimg').css("display","block");
		var _left = parseInt($('.smallimgbox').find('ul').css("left"))-443;
		
			imgAnimate(_left);
		})
		$('.prev-smallimg').click(function(){
			$('.next-smallimg').css("display","block");
		var _left = parseInt($('.smallimgbox').find('ul').css("left"))+443;
		
		console.log(_left)
			imgAnimate(_left);
		})
		function imgAnimate(distance){
			if(distance > -200){
			$('.prev-smallimg').css("display","none");
			$('.next-smallimg').css("display","block");
		}else if(distance < (nodeSize-4) * -124){
			$('.next-smallimg').css("display","none");
			$('.prev-smallimg').css("display","block");
		}
			$('.smallimgbox').find('ul').stop().animate({
				left:distance
			},1000)
		}
		function showImg(index){
			$('.page-number').find('span').html(index+1);
			$('.smallimgbox').find('li').removeClass('onimg');
			$('.smallimgbox').find('li').eq(index).addClass('onimg')
			$('.bigimgbox').find('li').removeClass('img-active');
			$('.bigimgbox').find('li').eq(index).addClass('img-active')
		}
	}
	return{
		detailImg:detailImg
	}
})