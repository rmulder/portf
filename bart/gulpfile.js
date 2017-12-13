"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps');

gulp.task("concatStyle", function () {

   gulp.src(["scss/reset.scss", "scss/var.scss", "scss/style.scss"])
          .pipe(concat("bart.scss"))
          .pipe(gulp.dest("scss")); // destination of file
});

// doesn't support ES6
gulp.task("minifyScripts", ["concatStyle"], function() {

  return gulp.src('js/bart.js')
          .pipe(uglify().on('error', gutil.log)) // error outputs to console.
          .pipe(rename('bart.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {

  // main stylesheet:
   gulp.src("scss/bart.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('bart.css'))
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['concatStyle', 'compileSass']); // concats and compresses

gulp.task("default", ['build']);
