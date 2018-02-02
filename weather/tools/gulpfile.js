"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  inject = require('gulp-inject-string');

gulp.task("concatScripts", function()
{
   gulp.src("../src/scss/style.scss")
          .pipe(concat("weather.scss")) // re-name
          .pipe(gulp.dest("../src/scss"));
});

gulp.task('imgCompress', function() {
  gulp.src('../src/img/favicon.img')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});

gulp.task('htmlcompress', function() {
    return gulp.src('../src/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
  });

// ES6 min. support
gulp.task("minifyScripts", ["concatScripts"], function()
{
  return gulp.src('../src/js/app.js')
          .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
          .pipe(rename('weather.min.js'))
          .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
   gulp.src("../src/scss/weather.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('weather.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task('inject:replace', function(){
    gulp.src('../build/index.min.html')
        .pipe(inject.replace('app.js', 'weather.min.js'))
        .pipe(inject.replace('css/weather.css', 'css/weather.min.css'))
        // .pipe(rename('replace.html'))
        .pipe(gulp.dest('../build'));

    // gulp.src('../build/index.min.html')
    //     .pipe(inject.replace('css/weather.css', 'css/weather.min.css'))
    //     // .pipe(rename('replace.html'))
    //     .pipe(gulp.dest('../build'));
});

gulp.task("build", ['minifyScripts', 'compileSass', 'htmlcompress', 'imgCompress', 'inject:replace']);

gulp.task("default", ['build']);
