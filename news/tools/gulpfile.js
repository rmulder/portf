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

const paths = {
  scss: {
    src: ['../src/scss/*.scss', '!../src/scss/vars.scss', '!../src/scss/news.scss'],
    spec: '../src/scss/news.scss',
    dest: '../src/scss'
  },
  css: {
    dest: '../build/css'
  },
  js: {
    src: '../src/js/*.js',
    dest: '../build/js'
  },
  html: {
    src: '../src/index.html',
    dest: '../build'
  },
  img: {
    src: '../src/img/**',
    dest: '../build/img'
  }
};

gulp.task("concatStyles", () => 
{
  gulp.src(paths.scss.src)
      .pipe(concat("news.scss"))
      .pipe(gulp.dest(paths.scss.dest));
});

gulp.task('imgCompress', () =>
{
  gulp.src(paths.img.src)
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest(paths.img.dest))
});


// inject.replace inside
gulp.task('htmlcompress', () =>
{
  gulp.src(paths.html.src)
      .pipe(inject.replace('news.js', 'news.min.js'))
      .pipe(inject.replace('style.css', 'news.min.css'))
      .pipe(inject.replace('<link rel = "stylesheet" href="css/cards.css">', '')) //removal
      .pipe(inject.replace('<link rel = "stylesheet" href="css/boxes.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest(paths.html.dest));
  });

// ES6 min. support
gulp.task("minifyScripts", () =>
{
  gulp.src(paths.js.src)
      .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
      .pipe(rename('news.min.js'))
      .pipe(gulp.dest(paths.js.dest));
});

gulp.task("compileSass", () =>
{
  gulp.src(paths.scss.spec)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('news.min.css'))
    .pipe(gulp.dest(paths.css.dest))
});

gulp.task("build", gulpSequence(['concatStyles', 'imgCompress', 'htmlcompress', 'minifyScripts'], 'compileSass'));

gulp.task("default", ['build']);
