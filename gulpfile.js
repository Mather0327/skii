var gulp = require("gulp");
gulp.task('copyallfile',async()=>{
	gulp.src('*/**/*')
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II'));
});

gulp.task("copy-html",async()=>{
	gulp.src("*.html")
	.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II'));
});
gulp.task("watch-all",async()=>{
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II'));
	});
	gulp.watch("js/**/*",async()=>{
		gulp.src("js/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\js'));
	});


	gulp.watch("img1/**/*",async()=>{
		gulp.src("img1/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\img1'));
	});
	gulp.watch("loginreg/**/*",async()=>{
		gulp.src("loginreg/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\loginreg'));
	});
    gulp.watch("img/**/*",async()=>{
		gulp.src("img/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\loginreg\\img'));
	});
    gulp.watch("css/**/*",async()=>{
		gulp.src("css/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\loginreg\\css'));
	});
    gulp.watch("js/**/*",async()=>{
		gulp.src("js/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\loginreg\\js'));
	});
    gulp.watch("php/**/*",async()=>{
		gulp.src("php/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\loginreg\\php'));
	});


	gulp.watch("css/**/*",async()=>{
		gulp.src("css/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\css'));
	});
	gulp.watch("img/**/*",async()=>{
		gulp.src("img/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\img'));
	});
	gulp.watch("font/**/*",async()=>{
		gulp.src("font/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\font'));
	});
	gulp.watch("php/**/*",async()=>{
		gulp.src("php/**/*")
		.pipe(gulp.dest('C:\\phpStudy\\PHPTutorial\\WWW\\SK-II\\php'));
	});
});
