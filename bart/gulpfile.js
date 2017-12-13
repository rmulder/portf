"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

gulp.task('htmlcompress', function() {
    return gulp.src('index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('html'));
  });

gulp.task("concatStyle", function () {

   gulp.src(["scss/reset.scss", "scss/var.scss", "scss/style.scss"])
          .pipe(concat("bart.scss"))
          .pipe(gulp.dest("scss")); // destination of file
});

// supports ES6 compression
gulp.task("jscompress", function() {

  return gulp.src('js/*.js')
          .pipe(uglify().on('error', gutil.log)) // error outputs to console.
          .pipe(uglify())
          .pipe(rename('bart.min.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {

  // main stylesheet:
   gulp.src("scss/bart.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('bart.css'))
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['concatStyle','compileSass', 'jscompress']); // concats and compresses

gulp.task("default", ['build']);
