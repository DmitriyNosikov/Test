var gulp = require("gulp"),
	sass = require("gulp-sass");
	
gulp.task("sass", function(){
	gulp.src("./sass/**/*scss") //Источник, из которого будут браться файлы scss и компилироваться в css
	.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError)) //Тип скомпилированного css-файла и обработчик ошибок
	.pipe(gulp.dest("./css")); //Куда сейвить скомпилированные файлы
});

//Таск, наблюдающий за изменением файлов scss и при наличии изменений, вызывающий такс sass
gulp.task("sass:watch", function(){
	gulp.watch("./sass/**/*scss", ['sass']);
});