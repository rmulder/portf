const gulp = require('gulp');
const purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('public/css/util.css')
    .pipe(purify(['public/index.html']))
    .pipe(gulp.dest('./dist/'));
});
