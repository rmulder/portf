"use strict";

import gulp from 'gulp'
//const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');

gulp.task("concatScripts", () =>
{
   gulp.src("../src/scss/style.scss")
    .pipe(concat("weather.scss")) // re-name
    .pipe(gulp.dest("../src/scss"));
});

gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/favicon.img')
   .pipe(imagemin({ optimizationLevel: 5 }))
   .pipe(gulp.dest('../build/img'))
});

gulp.task('htmlcompress', () =>
{
  return gulp.src('../src/index.html')
    .pipe(inject.replace('app.js', 'weather.min.js'))
    .pipe(inject.replace('weather.css', 'weather.min.css'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.min.html'))
    .pipe(gulp.dest('../build'));
  });

// ES6 min. support
gulp.task("minifyScripts", ["concatScripts"], () =>
{
  return gulp.src('../src/js/app.js')
    .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
    .pipe(rename('weather.min.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
{
   gulp.src("../src/scss/weather.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('weather.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task('watch:js', function () {
    gulp.watch('../src/js/app.js', ['minifyScripts']);
});

gulp.task("build", ['minifyScripts', 'compileSass', 'htmlcompress', 'imgCompress']);

gulp.task("default", ['build']);
