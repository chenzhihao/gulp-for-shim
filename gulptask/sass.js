var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

var config = require('../gulpconfig');

module.exports = function () {
  return  gulp.src([config.style.vendor, config.style.src])
    .pipe(sass({
      onError: function (err) {
        gutil.log('Sass compile error:', gutil.colors.red(err));
      }
    }))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(config.style.dest));
};