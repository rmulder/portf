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

const paths =
{
  scripts: ['../src/JS/*.js', '!../src/JS/script.js'],
  scss: ['../src/SCSS/style.scss', '../src/SCSS/gallery.scss', '!../src/SCSS/vars.scss'],
  images: '../src/img/*',
  html: ['../src/index.html', '../src/photos.html'],
  css: ['../src/CSS/*.css', '!../src/CSS/*.map', '!../src/CSS/vars.css']
};

gulp.task('htmlcompress', () =>
{
  gulp.src(paths.html[0])
    .pipe(inject.replace('CSS/style.css', 'css/style.min.css'))
    .pipe(inject.replace('<link rel = "stylesheet" type="text/css" href="CSS/var.css">', '')) //removal
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.min.html'))
    .pipe(gulp.dest('../build'));

  gulp.src(paths.html[1])
    .pipe(inject.replace('CSS/gallery.css', 'css/gallery.min.css'))
    .pipe(inject.replace('CSS/gallery.css', 'css/gallery.min.css'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('photos.min.html'))
    .pipe(gulp.dest('../build'));
});

gulp.task('imgCompress', () =>
{
  gulp.src(paths.images)
    .pipe(imagemin({ optimizationLevel: 7 }))
    .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", () =>
{
  gulp.src(paths.scss[0])
    .pipe(concat("style.scss"))
    .pipe(gulp.dest("../src/scss"));

  gulp.src(paths.scss[1])
    .pipe(concat("gallery.scss"))
    .pipe(gulp.dest("../src/scss"));
});

gulp.task("compileSass", () =>
{
  gulp.src(paths.scss[0])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../build/css'))

  gulp.src(paths.scss[1])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('gallery.min.css'))
    .pipe(gulp.dest('../build/css'))
});

// Rerun the task when a file changes
gulp.task('watch', () =>
{
  gulp.watch(paths.scss, ['compileSass']);
  gulp.watch(paths.images, ['imgCompress']);
  gulp.watch(paths.html, ['htmlcompress']);
});

gulp.task("build", gulpSequence(['htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
