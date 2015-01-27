var gulp = require('gulp');
var config = require('../gulpconfig');

module.exports = function () {
  gulp.watch(config.script.src, ['javascript']);
  gulp.watch(config.style.src, ['sass']);
};