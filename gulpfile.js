var gulp     = require('gulp');
var gulputil = require('gulp-util');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var minify   = require('gulp-minify-css');
var connect  = require('gulp-connect');

// Use         -> npm install --global gulp (install gulp)
// gulp        -> For start
// npm install -> install modules

gulp.task('scripts', function(){

 return gulp.src(['./lib/literal.js'])
        .pipe(concat('literal.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('./lib/'))
	    .pipe(connect.reload());

});

gulp.task('watch', function(){ //gulp watch
    	gulp.watch('./lib/*.js', ['scripts']);
});

gulp.task('default', ['scripts','watch']);

