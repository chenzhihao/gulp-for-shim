var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var config = require('../gulpconfig');

var jsArraySeq = config.script.vendor.map(function (value, key) {
  return config.src + 'scripts/vendor/' + value;
});

module.exports = function () {
  //will concat vendor js as she sequence in jsArraySeq
  jsArraySeq.push(config.script.src);
  jsArraySeq.push('!src/scripts/browserify/**/*.js');
  console.log(jsArraySeq);
  return gulp.src(jsArraySeq)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.script.dest));
}