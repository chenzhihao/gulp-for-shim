var connect = require('gulp-connect');
var config = require('../gulpconfig');


module.exports = function () {
  connect.server({
    root: config.dest,
    livereload: true,
    port: 8000
  });
};