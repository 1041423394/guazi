/*alert("加载成功");
*/

//<1>配置路径
require.config({
	paths: {
		
		jquery:"jquery-1.10.1.min",
		cookie:"jquery.cookie",
		detailImg:"detailImg",
		detailDetection:"detailDetection",
		detail: "detail",
		detailExplain:"detailExplain",
	}
})
//<2>引入模块，异步引入
require(["jquery","detail"], function($,detail){
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
})
