"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function () {

   gulp.src("scss/style.scss") // js file to be concat
          .pipe(concat("weather.scss")) // re-name
          .pipe(maps.write('./'))
          .pipe(gulp.dest("scss")); // destination of concat js to be located
});

gulp.task("minifyScripts", ["concatScripts"], function() {

  return gulp.src('js/app.js')
          .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
          .pipe(rename('weather.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {

  // main stylesheet:
   gulp.src("scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('weather.css'))
    .pipe(maps.write('./')) // sourcemaps to css
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['minifyScripts', 'compileSass']);

gulp.task("default", ['build']);
