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

  gulp.src('../src/projects.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('projects.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', () =>
{
  gulp.src('../src/img/*.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", () =>
{
   gulp.src("../src/scss/style.scss")
      .pipe(concat("photo1.scss"))
      .pipe(gulp.dest("../src/scss"));

    gulp.src("../src/scss/projects.scss")
       .pipe(concat("photo2.scss"))
       .pipe(gulp.dest("../src/scss"));
});

// old non-es6 support compress.
gulp.task("jscompress", () =>
{
  gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('photo.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", () =>
{
 gulp.src("../src/scss/photo1.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('photo1.min.css'))
    .pipe(gulp.dest('../build/css'))

  gulp.src("../src/scss/photo2.scss")
     .pipe(sass({outputStyle: 'compressed'}))
     .pipe(rename('photo2.min.css'))
     .pipe(gulp.dest('../build/css'))
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
