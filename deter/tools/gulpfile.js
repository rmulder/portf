"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');

gulp.task('htmlcompress', (done) =>
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('app.js', 'deter.min.js'))
      .pipe(inject.replace('style.css', 'deter.min.css'))
      .pipe(inject.replace('<link rel = "stylesheet" type="text/css" href="css/var.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));

      done();
});

gulp.task('imgCompress', (done) =>
{
  gulp.src('../src/img/deter.ico')
     .pipe(imagemin({ optimizationLevel: 5 }))
     .pipe(gulp.dest('../build/img'))
    
     done();
});

gulp.task("concatStyle", (done) =>
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("deter.scss"))
      .pipe(gulp.dest("../src/scss"));
     
      done();
});

gulp.task("jscompress", (done) =>
{
   gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('deter.min.js'))
      .pipe(gulp.dest('../build/js'));

      done();
});

gulp.task("compileSass", () =>
{
   gulp.src("../src/scss/deter.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

// gulp.task("default", ['build']);

gulp.task('default', gulp.parallel('htmlcompress', 'imgCompress', 'concatStyle', 'jscompress', (done) =>
{
  // do more stuff
  done();
}));
