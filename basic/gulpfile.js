'use strict';

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps');


// https://css-tricks.com/gulp-for-beginners/ GULP for beginners

// NEED TO WORK ON ORDER. NEED TO FIX ALL.


// combining all JS code.
gulp.task("concatScripts", function()
{
  gulp.src( [“JS/app.js”])
  .pipe(maps.init())
  .pipe(concat(“totapp.js”))
  .pipe(maps.write(“./”))
  .pipe(gulp.dest(“JS”));
});

gulp.task("compileSass", function()
{
  return gulp.src(“scss/application.scss”)
  .pipe(sass())
  .pipe(gulp.dest(CSS));
});

// compressing file
gulp.task("minifyScripts", function()
{
    gulp.src('JS/app.js') // sourcing app.js file
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('JS'))
});

gulp.task("compileSass", function()
{
  gulp.src(SCSS/style.scss”)
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write(“./”))
  .pipe(gulp.dest(CSS));
});
