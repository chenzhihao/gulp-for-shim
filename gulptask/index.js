var path = require('path');
var gulp = require('gulp');

module.exports = function (tasks) {
  tasks.forEach(function (name) {
    gulp.task(name, require(path.join(__dirname, name)));
  });

  return gulp;
};