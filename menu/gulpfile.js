"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

gulp.task('htmlcompress', function() {
    return gulp.src(['index.html', 'reservation.html', 'location.html', 'menu.html'])
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('html'));
  });

gulp.task("concatStyle", function () {
   gulp.src(["scss/location.scss", "scss/demo.scss", "scss/normalize.scss", "scss/stylesheet.scss", "scss/vars.scss"])
          .pipe(concat("reservation.scss"))
          .pipe(gulp.dest("scss")); // destination of file
});

// supports ES6 compression
gulp.task("jscompress", function() {
  return gulp.src(['js/anime.min.js', 'js/charming.min.js', 'js/demo.js'])
          // .pipe(uglify().on('error', gutil.log)) // error outputs to console.
          .pipe(uglify())
          .pipe(rename('restaurant.min.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {
  // main stylesheet:
   gulp.src("reservation.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('reservation.css'))
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['concatStyle','compileSass', 'jscompress', 'htmlcompress']); // concats and compresses

gulp.task("default", ['build']);
