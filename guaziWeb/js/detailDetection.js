define(function() {
          var detailDetection = function(){
            $(".picture-tit-tab").on("click","li",function(){
              $(".picture-tit-tab").find("li").removeClass("on");
              $(this).addClass("on");
              $(".outward_top").css("display","none");
              $(".outward_top").eq($(this).index()).css("display","block");
            })
          }
          return{
            detailDetection:detailDetection
          }
})
