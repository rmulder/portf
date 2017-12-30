"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
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

  gulp.src('../src/projects.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('projects.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', function() {
  gulp.src('../src/img/*.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", function () {
   gulp.src("../src/scss/style.scss")
      .pipe(concat("photo1.scss"))
      .pipe(gulp.dest("../src/scss"));

    gulp.src("../src/scss/projects.scss")
       .pipe(concat("photo2.scss"))
       .pipe(gulp.dest("../src/scss"));
});

// old non-es6 support compress.
gulp.task("jscompress", function()
{
  gulp.src('../src/js/app.js')
      .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      // .pipe(uglify())
      .pipe(rename('photo.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
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
