
// 配置路径
require.config({
	paths: {
		"jquery": "jquery-1.10.1.min",
		"startMove":"startMove",
		"uploading": "uploading",
		"judge": "judge",
		"popUp": "popUp",
		"suspend": "suspend",
	}
})

//<2>引入模块，异步引入
require(["jquery","uploading"],function($,uploading){
	uploading.uploading();
})
require(["jquery","judge"],function($,judge){
	judge.judge();
})
require(["jquery","popUp"],function($,popUp){
	popUp.popUp();
})
require(["jquery","suspend"],function($,suspend){
	suspend.suspend();
})
