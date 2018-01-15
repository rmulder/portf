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

  gulp.src('../src/about.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('about.min.html'))
      .pipe(gulp.dest('../build'));

  gulp.src('../src/location.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('location.min.html'))
      .pipe(gulp.dest('../build'));

  gulp.src('../src/menu.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('menu.min.html'))
      .pipe(gulp.dest('../build'));

  gulp.src('../src/reservation.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('reservation.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', function()
{
  gulp.src('../src/img/*')
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest('../build/img'))
});

// gulp.task("concatStyle", function ()
// {
//    gulp.src(["../src/scss/about.scss", "../src/scss/demo.scss", "../src/scss/location.scss", "../src/scss/menu.scss", "../src/scss/normalize.scss", "../src/scss/reservation.scss", "../src/scss/stylesheet.scss"])
//       .pipe(concat("menu_total.scss"))
//       .pipe(gulp.dest("../src/scss"));
// });

gulp.task("jscompress", function()
{
   gulp.src(['../src/js/anime.min.js', '../src/js/charming.min.js', '../src/js/demo.js'])
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('menu.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
   gulp.src(["../src/scss/about.scss", "../src/scss/demo.scss", "../src/scss/location.scss", "../src/scss/menu.scss", "../src/scss/normalize.scss", "../src/scss/reservation.scss", "../src/scss/stylesheet.scss"])
    .pipe(sass({outputStyle: 'compressed'}))
    // .pipe(rename('menu.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
