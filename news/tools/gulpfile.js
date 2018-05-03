"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const gulpSequence = require('gulp-sequence');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');

gulp.task("concatStyles", () => 
{
  gulp.src(["../src/scss/cards.scss", "../src/scss/style.scss", "../src/scss/boxes.scss", "../src/scss/vars.scss"])
      .pipe(concat("news.scss"))
      .pipe(gulp.dest("../src/scss"));
});

gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/favicon.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});


// inject.replace inside
gulp.task('htmlcompress', () =>
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
gulp.task("minifyScripts", () =>
		{
  gulp.src('../src/js/news.js')
      .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
      .pipe(rename('news.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
{
  gulp.src("../src/scss/news.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('news.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['concatStyles', 'imgCompress', 'htmlcompress', 'minifyScripts'], 'compileSass'));

gulp.task("default", ['build']);
