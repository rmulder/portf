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

gulp.task('htmlcompress', () =>
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

gulp.task('imgCompress', () => 
{
  gulp.src('../src/img/*')
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest('../build/img'))
});

// gulp.task("concatStyle", () =>
// {
//    gulp.src(["../src/scss/about.scss", "../src/scss/demo.scss", "../src/scss/location.scss", "../src/scss/menu.scss", "../src/scss/normalize.scss", "../src/scss/reservation.scss", "../src/scss/stylesheet.scss"])
//       .pipe(concat("menu_total.scss"))
//       .pipe(gulp.dest("../src/scss"));
// });

gulp.task("jscompress", () =>
{
   gulp.src(['../src/js/anime.min.js', '../src/js/charming.min.js', '../src/js/demo.js'])
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('menu.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
{
   gulp.src(["../src/scss/about.scss", "../src/scss/demo.scss", "../src/scss/location.scss", "../src/scss/menu.scss", "../src/scss/normalize.scss", "../src/scss/reservation.scss", "../src/scss/stylesheet.scss"])
    .pipe(sass({outputStyle: 'compressed'}))
    // .pipe(rename('menu.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
