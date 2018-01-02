var gulp = require('gulp');
var server = require('gulp-webserver');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('minify', function () {
    gulp.src('./Content/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./Content/css'))
})

gulp.task('uglify', function () {
    gulp.src('./Content/js/*.js')
        .pipe(concat('data_format.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./Content/js'))
})

gulp.task('server', function () {
    gulp.src('./')
        .pipe(server({
            host: 'localhost',
            port: 8080,
            open: true,
            fallback: 'index.html'
        }))
})

gulp.watch();

gulp.task('default',['minify','uglify','server']);