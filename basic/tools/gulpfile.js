"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('htmlcompress', () =>
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

gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/*')
   .pipe(imagemin({ optimizationLevel: 5 }))
   .pipe(gulp.dest('../build/img'))
});

gulp.task("jscompress", () =>
{
   gulp.src('../src/js/app.js')
    .pipe(uglify().on('error', gutil.log)) // error outputs to console.
    // .pipe(uglify())
    .pipe(rename('basic.min.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
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
