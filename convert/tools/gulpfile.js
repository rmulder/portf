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
const inject = require('gulp-inject-string');
const cleanCSS = require('gulp-clean-css');

gulp.task('htmlcompress', () =>
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('app.js', 'convert.min.js'))
      // .pipe(inject.replace('style.css', 'convert.min.css'))
      .pipe(htmlmin({collapseWhitespace: true}, {minifyCSS: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
});

// not used
gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/convert.ico')
     .pipe(imagemin({ optimizationLevel: 5 }))
     .pipe(gulp.dest('../build/img'))
});

// not used
gulp.task("concatStyle", () =>
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("convert.scss"))
      .pipe(gulp.dest("../src/scss"));
});

gulp.task("jscompress", () =>
{
   gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('convert.min.js'))
      .pipe(gulp.dest('../build/js'));
});


gulp.task("compileCSS", () =>
{
   gulp.src("../src/css/*.css")
    .pipe(cleanCSS())
    .pipe(rename('convert.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'compileCSS', 'htmlcompress']));

gulp.task("default", ['build']);
