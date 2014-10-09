
var gulp    = require('gulp'),
    rename  = require('gulp-rename'),
    compass = require('gulp-compass'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),

    paths = {
      scripts: 'site/assets/src/js/**/*.js',
      images: 'site/assets/src/img/**/*'
    };


gulp.task('bower', function(cb) {
  
  gulp.src('./bower_components/modernizr/modernizr.js')
    .pipe(gulp.dest('./site/assets/src/js/lib'));

  gulp.src('./bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('./site/assets/src/js/lib'));

  gulp.src('./bower_components/velocity/velocity.js')
    .pipe(gulp.dest('./site/assets/src/js/lib'));

  gulp.src('./bower_components/velocity/velocity.ui.js')
    .pipe(gulp.dest('./site/assets/src/js/lib'));

  gulp.src('./bower_components/normalize.css/normalize.css')
    .pipe(rename('normalize.scss'))
    .pipe(gulp.dest('./site/assets/src/sass/lib'));
});



gulp.task('compass', function() {

})

gulp.task('default', ['bower']);