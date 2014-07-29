
var gulp = require('gulp');
var rename = require('gulp-rename');

var paths = {
  scripts: 'site/assets/src/js/**/*.js',
  images: 'site/assets/src/img/**/*'
};


gulp.task('bower', function(cb) {
  gulp.src('./bower_components/modernizr/modernizr.js')
    .pipe(gulp.dest('./site/assets/src/js/lib'));

  gulp.src('./bower_components/normalize.css/normalize.css')
    .pipe(rename('normalize.scss'))
    .pipe(gulp.dest('./site/assets/src/sass/lib'));
});


// gulp.src('./bower_components/normalize.css/normalize.css')
//   .pipe(rename('))

gulp.task('default', ['bower']);