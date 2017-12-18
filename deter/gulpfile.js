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
   gulp.src("scss/style.scss")
          .pipe(concat("deter.scss"))
          .pipe(gulp.dest("scss")); // destination
});

gulp.task("jscompress", function() {
  return gulp.src('js/deter.js')
          .pipe(uglify().on('error', gutil.log)) // error outputs to console.
          // .pipe(uglify())
          .pipe(rename('deter.min.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {
   gulp.src("scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.css'))
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['compileSass', 'jscompress', 'htmlcompress']); // concats and compresses

gulp.task("default", ['build']);
