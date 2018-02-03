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

// includes 'inject:html'
gulp.task('htmlcompress', function()
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('bart.js', 'bart.min.js'))
      .pipe(inject.replace('bart.css', 'bart.min.css'))
      .pipe(inject.replace('<link rel="stylesheet" href="css/reset.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', function() {
  gulp.src('../src/img/bart.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", function () {
   gulp.src(["../src/scss/reset.scss", "../src/scss/var.scss", "../src/scss/style.scss"])
      .pipe(concat("bart.scss"))
      .pipe(gulp.dest("../src/scss"));
});

// ES6 min. support
gulp.task("jscompress", function()
{
  gulp.src('../src/js/bart.js')
      // .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      .pipe(uglify())
      .pipe(rename('bart.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
 gulp.src("../src/scss/bart.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('bart.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
