var gulp           = require('gulp');
var minifycss     = require('gulp-minify-css');
var stylus         = require('gulp-stylus');
var autoprefixer   = require('gulp-autoprefixer');

gulp.task('stylus', function(){
    return gulp.src('src/saas-documentation.styl')
        .pipe(stylus())
        .pipe(autoprefixer('last 4 version'))
        .pipe(minifycss())
        .pipe(gulp.dest('dest/'))
});
