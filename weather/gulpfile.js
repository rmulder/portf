"use strict";

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyes'),
  htmlmin = require('gulp-htmlmin'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function ()
{
   gulp.src("src/scss/style.scss") // js file to be concat
          .pipe(concat("weather.scss")) // re-name
          .pipe(gulp.dest("buid/scss")); // destination of concat js to be located
});

gulp.task('htmlcompress', function() {
    return gulp.src('src/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('build/html'));
  });

// ES6 min. support
gulp.task("minifyScripts", ["concatScripts"], function()
{
  return gulp.src('src/js/app.js')
          .pipe(uglify().on('error', gutil.log)) // if error, outputs to console.
          .pipe(rename('weather.js'))
          .pipe(gulp.dest('build/js'));
});

gulp.task("compileSass", function()
{
   gulp.src("src/scss/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('weather.css'))
    .pipe(gulp.dest('build/css'))
});

gulp.task("build", ['minifyScripts', 'compileSass', 'htmlcompress']);

gulp.task("default", ['build']);
