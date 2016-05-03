var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    path = require('path'),
    plumber = require('gulp-plumber');

var sassFiles = ['**/*.scss', '!node_modules/**/*.*', '!reset.scss'];
var cssFiles = ['**/*.css', '!node_modules/**/*.*'];
var htmlFiles = ['**/*.html', '!node_modules/**/*.*'];

gulp.task('sass', function() {
  gulp.src(sassFiles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function() {
  connect.server({
    root: path.resolve('./'),
    livereload: true
  });
});

gulp.task('css', function () {
  gulp.src(cssFiles)
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(htmlFiles)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(cssFiles, ['css']);
  gulp.watch(htmlFiles, ['html']);
});

gulp.task('default', ['connect', 'sass', 'watch']);
