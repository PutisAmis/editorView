var gulp    = require('gulp');
var postcss = require('gulp-postcss');
var gutil   = require('gulp-util');

gulp.task('css', function () {
  var processors = [
      "postcss-cssnext",
      "autoprefixer",
      "precss"
  ];
  return gulp.src('./src/**/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.css', ['css']);
});

gulp.task('default', ['watch']);