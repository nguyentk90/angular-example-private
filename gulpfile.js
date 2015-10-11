var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
     var files = [
      'src/app/**/*.html'
   ];
    browserSync.init(files, {
        server: "src",
        port: 9000
    });

    //gulp.watch('src/app/home/home.html').on('change', browserSync.reload);
});