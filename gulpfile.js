
var gulp      = require('gulp');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var sass      = require('gulp-sass');
var sassGlob  = require('gulp-sass-glob');
var postcss   = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');
var csswring      = require('csswring');


gulp.task('sass', function () {

  var processors = [
    autoprefixer({ browsers: [ 'last 3 versions' ]}),
    csswring
  ];

  gulp.src('./site/assets/sass/styles.scss')
    .pipe( sassGlob())
    .pipe( sass().on( 'error', sass.logError ))
    .pipe( postcss( processors ))
    .pipe( gulp.dest('./site/assets/css'));

});


gulp.task('js', function () {

});

 
gulp.task('watch', function () {
  gulp.watch('./site/assets/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['watch']);
