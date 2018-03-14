"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  gulpSequence = require('gulp-sequence'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  inject = require('gulp-inject-string');

gulp.task('htmlcompress', function()
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('app.js', 'deter.min.js'))
      .pipe(inject.replace('style.css', 'deter.min.css'))
      .pipe(inject.replace('<link rel = "stylesheet" type="text/css" href="css/var.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
});

gulp.task('imgCompress', function()
{
  gulp.src('../src/img/deter.ico')
     .pipe(imagemin({ optimizationLevel: 5 }))
     .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", function ()
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("deter.scss"))
      .pipe(gulp.dest("../src/scss"));
});

gulp.task("jscompress", function()
{
   gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('deter.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
   gulp.src("../src/scss/deter.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
