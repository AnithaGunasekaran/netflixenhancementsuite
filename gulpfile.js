var gulp = require('gulp');
var browserSync = require('browser-sync');
var bookmarkleter = require('gulp-bookmarkleter');
var rename = require("gulp-rename");
var dom  = require('gulp-dom');

gulp.task("html", function() {
	
	return gulp.src('src/index.html')
		.pipe(bookmarkleter())
		.pipe(gulp.dest('debug/'));

		/*
		.pipe(dom(function(){
			var debugEls = this.querySelectorAll('.debug');
			var wrap = this.querySelector(".wrap");
			for(var i = 0; i < debugEls.length; i++) {
				wrap.removeChild(debugEls[i]);
			}
            return this;
        }, false))
		.pipe(gulp.dest('public/'));
		*/
});

gulp.task("js", function() {

	return gulp.src('src/js/*')
		.pipe(gulp.dest('debug/js'));
	
});

gulp.task("default", ["html", "js"], function() {

	
	browserSync({
        server: {
        	baseDir: "./debug",
        },
        open: false,
		notify: false,
		files: ["./debug/**/*"],
		reloadOnRestart: true
    });
	
	gulp.watch("src/js/*", ["js"]);
	gulp.watch("src/index.html", ["html"]);
	
});