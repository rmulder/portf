"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps');

gulp.task("concatStyle", function () {

   gulp.src("scss/style.scss")
          .pipe(concat("deter.scss")) // re-name
          .pipe(maps.write('./'))
          .pipe(gulp.dest("scss")); // destination of concat scss to be located
});

gulp.task("minifyScripts", ["concatScripts"], function() {

  return gulp.src('js/app.js')
          .pipe(uglify().on('error', gutil.log)) // if error, output to console.
          .pipe(rename('deter.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {

  // main stylesheet:
   gulp.src("scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.css'))
    .pipe(maps.write('./')) // sourcemaps to css
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['minifyScripts', 'compileSass']);

gulp.task("default", ['build']);
