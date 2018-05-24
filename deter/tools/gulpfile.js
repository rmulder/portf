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

const paths = {
  scss: {
    src: ['../src/scss/*.scss', '!../src/scss/let.scss'],
    spec: '../src/scss/deter.scss',
    dest: '../src/scss'
  },
  css: {
    dest: '../build/css'
  },
  js: {
    src: '../src/js/app.js',
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

gulp.task('htmlcompress', () =>
{
  gulp.src(paths.html.src)
      .pipe(inject.replace('app.js', 'deter.min.js'))
      .pipe(inject.replace('style.css', 'deter.min.css'))
      .pipe(inject.replace('<link rel = "stylesheet" type="text/css" href="css/var.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest(paths.html.dest));
});

gulp.task('imgCompress', () =>
{
  gulp.src(paths.img.src)
     .pipe(imagemin({ optimizationLevel: 9 }))
     .pipe(gulp.dest(paths.img.dest))
});

gulp.task("concatStyle", () =>
{
   gulp.src(paths.scss.src)
      .pipe(concat("deter.scss"))
      .pipe(gulp.dest(paths.scss.dest));
});

gulp.task("jscompress", () =>
{
   gulp.src(paths.js.src)
      .pipe(inject.replace('module.exports.threeCalc = threeCalc;', '')) //removal
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('deter.min.js'))
      .pipe(gulp.dest(paths.js.dest));
});

gulp.task("compileSass", () =>
{
   gulp.src(paths.scss.spec)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('deter.min.css'))
    .pipe(gulp.dest(paths.css.dest))
});

// Rerun the task when a file changes
gulp.task('watch', () =>
{
  gulp.watch(paths.js.src, ['jscompress']);
  gulp.watch(paths.html.src, ['htmlcompress']);
  gulp.watch(paths.img.src, ['imgCompress']);
  gulp.watch(paths.scss.src, ['concatStyle', 'compileSass']);
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task('default', ['build']);
