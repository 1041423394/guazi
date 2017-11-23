require.config({
	paths:{
		"jquery": "jquery-1.10.1.min",
		"banner": "banner",
		"buysell": "buysell",
		"buystep": "buystep",
		"feedback": "feedback",
		
		/*"detailImg":"detailImg",
		"detailDetection":"detailDetection",
		"detail": "detail",
		"detailExplain":"detailExplain",*/
	}
})

require(["jquery", "banner"], function($, banner){
	banner.banner()
})
require(["jquery", "buysell"],function($, buysell){
	buysell.buysell();
})
require(["jquery", "buystep"],function($, buystep){
	buystep.buystep();
})
require(["jquery", "feedback"], function($, feedback){
	feedback.feedback();
})


/*require(["jquery","detail"], function($,detail){
	detail.detail();
})
require(["jquery","detailImg"], function($,detailImg){
	detailImg.detailImg();
})
require(["jquery","detailExplain"], function($,detailExplain){
	detailExplain.detailExplain();
})
require(["jquery","detailDetection"], function($,detailDetection){
	detailDetection.detailDetection();
})*/













