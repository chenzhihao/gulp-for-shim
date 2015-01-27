var gulp = require('gulp');
var mocha = require('gulp-mocha');

var config = require('../gulpconfig');

module.exports = function () {
  return gulp.src(config.script.path)
    .pipe(mocha({reporter: 'spec'}));
};
