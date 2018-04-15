"use strict";

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

//const gulp = require('gulp');
//const htmlmin = require('gulp-htmlmin');

gulp.task('htmlcompress', () =>
{
  gulp.src('index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('build'));
});

gulp.task("default", ['htmlcompress']);

