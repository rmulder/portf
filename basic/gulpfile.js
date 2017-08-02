'use strict';

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require(‘gulp-sourcemaps’);

// NEED TO WORK ON ORDER. NEED TO FIX ALL.


// combining all JS code.
gulp.task("concatScripts", function()
{
    gulp.src(['JS/app.js']) // JS file dependencies
    .pipe(concat('totapp.js')) // compressing all into "totapp.js" file name
    .pipe(gulp.dest('JS')); // JS folder destination

    gulp.src(['CSS/style.css', 'CSS/variables.css']) // JS file dependencies
    .pipe(concat('styles.css')) // compressing all into "totapp.js" file name
    .pipe(gulp.dest('CSS')); // JS folder destination
});

// compressing file
gulp.task("minifyScripts", function()
{
    gulp.src('JS/app.js') // sourcing app.js file
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('JS'))
});
