"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  gulpSequence = require('gulp-sequence'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass');

gulp.task('htmlcompress', function()
{
  gulp.src('../src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.min.html'))
    .pipe(gulp.dest('../build'));

  gulp.src('../src/html/signup.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('signup.min.html'))
    .pipe(gulp.dest('../build/html'));
});

gulp.task('imgCompress', function()
{
  gulp.src('../src/img/*')
   .pipe(imagemin({ optimizationLevel: 5 }))
   .pipe(gulp.dest('../build/img'))
});

gulp.task("jscompress", function()
{
   gulp.src('../src/js/app.js')
    .pipe(uglify().on('error', gutil.log)) // error outputs to console.
    // .pipe(uglify())
    .pipe(rename('basic.min.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
  gulp.src("../src/scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../build/css'))

  gulp.src("../src/scss/style_signup.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('style_signup.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
