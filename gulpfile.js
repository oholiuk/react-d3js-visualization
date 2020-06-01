// Dependencies
////////////////////////////////

var gulp 				= require('gulp'),
	 sass 				= require('gulp-sass'),
	 sourcemaps 		= require('gulp-sourcemaps'),
	 autoprefixer 		= require('gulp-autoprefixer'),
	 cleanCSS 			= require('gulp-clean-css'),
	 uglify 				= require('gulp-uglify'),
	 concat 				= require('gulp-concat'),
	 del 					= require('del'),
	 sequence 			= require('run-sequence'),
	 rename 				= require('gulp-rename');

gulp.task('compileSass', function() {

	return gulp.src('src/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 3 versions']
		})
		.pipe(gulp.dest('public/assets/css/')));

});

gulp.task('bundleJS', function() {

	// Bundle JavaScript into `/src/www/assets/js/` along with sourcemap
	///////////////////////////////////////////////////////////////////////
	return gulp.src('src/js-ui/*.js')
		.pipe(concat('ui.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/assets/js/'));

});

gulp.task('dev', gulp.series([
	'compileSass',
	'bundleJS'
]));

gulp.task('default', gulp.series('dev'));
