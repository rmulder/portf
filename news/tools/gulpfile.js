"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  gulpSequence = require('gulp-sequence'),
  sass = require('gulp-sass'),
  inject = require('gulp-inject-string');

gulp.task("concatStyles", function()
{
  gulp.src(["../src/scss/cards.scss", "../src/scss/style.scss", "../src/scss/boxes.scss", "../src/scss/vars.scss"])
      .pipe(concat("news.scss"))
      .pipe(gulp.dest("../src/scss"));
});

gulp.task('imgCompress', function()
{
  gulp.src('../src/img/favicon.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});


// inject.replace inside
gulp.task('htmlcompress', function()
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('news.js', 'news.min.js'))
      .pipe(inject.replace('style.css', 'news.min.css'))
      .pipe(inject.replace('<link rel = "stylesheet" href="css/cards.css">', '')) //removal
      .pipe(inject.replace('<link rel = "stylesheet" href="css/boxes.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
  });

// ES6 min. support
gulp.task("minifyScripts", function()
{
  gulp.src('../src/js/news.js')
      .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
      .pipe(rename('news.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
  gulp.src("../src/scss/news.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('news.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['concatStyles', 'imgCompress', 'htmlcompress', 'minifyScripts'], 'compileSass'));

gulp.task("default", ['build']);
