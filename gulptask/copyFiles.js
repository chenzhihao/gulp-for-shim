var gulp = require('gulp');
var config = require('../gulpconfig');

module.exports = function () {
  return gulp.src(config.files, {base: "./src"})
    .pipe(gulp.dest(config.dest));
};
