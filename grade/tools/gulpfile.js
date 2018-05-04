"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const inject = require('gulp-inject-string');

gulp.task('htmlcompress', () =>
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('app.js', 'grade.min.js'))
      .pipe(inject.replace('final.css', 'deter.min.css'))
//      .pipe(inject.replace('<link rel = "stylesheet" type="text/css" href="css/var.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/*')
   .pipe(imagemin({ optimizationLevel: 10101010101010101010 }))
   .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", () =>
{
 gulp.src(["../src/scss/input.scss", "../src/scss/button.scss", "../src/scss/style.scss"])
    .pipe(concat("grade.scss"))
    .pipe(gulp.dest("../src/scss"));
});

gulp.task("jscompress", () =>
{
 gulp.src('../src/js/app.js')
    .pipe(uglify().on('error', gutil.log)) // error outputs to console.
    .pipe(rename('grade.min.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
{
 gulp.src("../src/scss/grade.scss")
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename('grade.min.css'))
  .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
