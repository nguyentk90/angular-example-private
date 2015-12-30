var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var conf = require('./conf');

gulp.task('serve', ['inject'], function () {
    var files = [
        conf.paths.src + '/app/**/*.html',
        conf.paths.src + '/app/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: conf.paths.src,
            routes: {
                '/bower_components': conf.paths.bower,
                '/src': conf.paths.src
            }
        },
        port: 9000
    });
});

gulp.task('inject', function () {
    var target = gulp.src(conf.paths.src + '/index.html');
    var sources = gulp.src([conf.paths.src + '/**/*.js', conf.paths.src + '/**/*.css'], { read: false });

    target
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(inject(sources)).pipe(gulp.dest(conf.paths.src));
});