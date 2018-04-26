"use strict";

var gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const inject = require('gulp-inject-string');
const eslint = require('gulp-eslint');

// includes 'inject:html'
gulp.task('htmlcompress', function()
{
  gulp.src('../src/index.html')
      .pipe(inject.replace('bart.js', 'bart.min.js'))
      .pipe(inject.replace('bart.css', 'bart.min.css'))
      .pipe(inject.replace('<link rel="stylesheet" href="css/reset.css">', '')) //removal
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('../build'));
  });

gulp.task('imgCompress', function() {
  gulp.src('../src/img/bart.ico')
       .pipe(imagemin({ optimizationLevel: 5 }))
       .pipe(gulp.dest('../build/img'))
});

gulp.task("concatStyle", function () {
   gulp.src(["../src/scss/reset.scss", "../src/scss/var.scss", "../src/scss/style.scss"])
      .pipe(concat("bart.scss"))
      .pipe(gulp.dest("../src/scss"));
});

// ES6 min. support
gulp.task("jscompress", ['lint'], function()
{
  gulp.src('../src/js/bart.js')
      // .pipe(uglify().on('error', gutil.log)) // error outputs to console.
      .pipe(uglify())
      .pipe(rename('bart.min.js'))
      .pipe(gulp.dest('../build/js'));
});

gulp.task("compileSass", function()
{
 gulp.src("../src/scss/bart.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('bart.min.css'))
    .pipe(gulp.dest('../build/css'))
});

gulp.task('lint', () =>
{
  return gulp.src(['../src/js/*.js','../!node_modules/**'])
  .pipe(eslint({
			rules: {
        'no-console': 0,
				'no-alert': 0,
				'no-bitwise': 0,
				'camelcase': 1,
				'curly': 1,
				'eqeqeq': 0,
				'no-eq-null': 1,
				'guard-for-in': 1,
				'no-empty': 1,
				'no-use-before-define': 0,
				'no-obj-calls': 2,
				'no-unused-vars': 1,
				'new-cap': 1,
				'no-shadow': 0,
				'strict': 0,
				'no-invalid-regexp': 2,
				'comma-dangle': 2,
				'no-undef': 1,
				'no-new': 1,
				'no-extra-semi': 1,
				'no-debugger': 2,
				'no-caller': 1,
				'semi': 2,
				'quotes': 0,
				'no-unreachable': 2
			},
			globals: ['jQuery','$'],
			envs: ['browser', { "es6": true }]
		}))
		.pipe(eslint.format());
});

gulp.task("build", gulpSequence(['jscompress', 'htmlcompress', 'concatStyle', 'imgCompress'], 'compileSass'));

gulp.task("default", ['build']);
