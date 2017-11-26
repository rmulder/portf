"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  minhtml = require('gulp-minify-html');

gulp.task("minhtml", function () {
  return gulp.src('index.html')
  .pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true
  })).pipe(gulp.dest('./'));
});


gulp.task("concatStyles", function () {

   gulp.src(["scss/vars.scss", "scss/input.scss", "scss/button.scss", "scss/style.scss"]) // scss file to be concat
          .pipe(concat("totalStylesGrade.scss")) // re-name
          .pipe(maps.write('./'))
          .pipe(gulp.dest("scss")); // destination of concat scss to be located
});

gulp.task("minifyScripts", ["concatStyles"], function() {

  return gulp.src('js/app.js')
          .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
          .pipe(rename('finalgrade.js'))
          .pipe(gulp.dest('js'));
});

gulp.task("compileSass", function() {

  // main stylesheet:
   gulp.src("scss/totalStylesGrade.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('final.css'))
    .pipe(maps.write('./')) // sourcemaps to css
    .pipe(gulp.dest('css'))
});

gulp.task("build", ['minifyScripts', 'compileSass']);

gulp.task("default", ['build']);
