"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
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

  gulp.src('../src/HTML/photos.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('photos.min.html'))
    .pipe(gulp.dest('../build/html'));
});

gulp.task('imgCompress', function()
{
  gulp.src('../src/IMG/*')
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", function ()
{
  gulp.src(["../src/scss/style.scss"])
    .pipe(concat("style.scss"))
    .pipe(gulp.dest("../src/scss"));

  gulp.src(["../src/scss/gallery.scss"])
    .pipe(concat("gallery.scss"))
    .pipe(gulp.dest("../src/scss"));
});

// gulp.task("jscompress", function()
// {
//    gulp.src('../src/js/app.js')
//       .pipe(uglify().on('error', gutil.log)) // error outputs to console.
//       // .pipe(uglify())
//       .pipe(rename('deter.min.js'))
//       .pipe(gulp.dest('../build/js'));
// });

gulp.task("compileSass", function()
{
  gulp.src("../src/scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../build/css'))

  gulp.src("../src/scss/gallery.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('gallery.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
