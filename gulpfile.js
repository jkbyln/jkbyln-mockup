
var gulp      = require('gulp');
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

  gulp.src('./site/assets/src/sass/styles.scss')
    .pipe( sassGlob())
    .pipe( sass().on( 'error', sass.logError ))
    .pipe( postcss( processors ))
    .pipe( gulp.dest('./site/assets/dist/css'));

});
 
gulp.task('watch', function () {
  gulp.watch('./site/assets/src/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['watch']);
