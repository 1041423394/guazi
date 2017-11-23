/*
 * 	引入gulp
 */
var gulp = require("gulp");


/*
	引入css压缩插件
*/
var minifycss = require("gulp-minify-css");


gulp.task("copy-index", function(){
	return gulp.src("index.html").pipe(gulp.dest("guaziWeb"))
	.pipe(connect.reload());
})

/*
通过gulp-scss去编译scss文件到css文件

*/

/*
	重命名插件 gulp-rename
*/
var rename = require("gulp-rename");

var scss = require("gulp-scss");
gulp.task("scss", function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("guaziWeb/css"))
	.pipe(minifycss())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("guaziWeb/css"))
	.pipe(connect.reload());
})


/*
	gulp-connect来启动一个服务程序
*/
//使用插件之前，先将插件插件对象引入
var connect = require("gulp-connect");

gulp.task("server", function(){
	connect.server({
		root: "guaziWeb",  //声明服务器的根目录
		livereload: true   //开启直播
	})
})


gulp.task("build", ["copy-index", "scss"], function(){
	console.log("执行成功");
})

gulp.task("watch", function(){
	gulp.watch("index.html", ["copy-index"]);
	gulp.watch("stylesheet/*.scss", ["scss"]);
	
})

gulp.task("default", ["server", "watch"])













