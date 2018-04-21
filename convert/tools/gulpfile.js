"use strict";

var gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglifyes');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let gulpSequence = require('gulp-sequence');
let gutil = require('gulp-util');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let inject = require('gulp-inject-string');
let cleanCSS = require('gulp-clean-css');

gulp.task('htmlcompress', () =>
{
  gulp.src('../src/index.html')
      // .pipe(inject.replace('app.js', 'convert.min.js'))
      // .pipe(inject.replace('style.css', 'convert.min.css'))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
});

// not used
gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/convert.ico')
     .pipe(imagemin({ optimizationLevel: 5 }))
     .pipe(gulp.dest('../build/img'))
});

// not used
gulp.task("concatStyle", () =>
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("convert.scss"))
      .pipe(gulp.dest("../src/scss"));
});

gulp.task("jscompress", () =>
{
   gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('convert.min.js'))
      .pipe(gulp.dest('../build/js'));
});


gulp.task("compileSass", () =>
{
   gulp.src("../src/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename('convert.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress']));

gulp.task("default", ['build']);
