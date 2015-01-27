var gulp = require('gulp');

require('./gulptask')([
  'server',
  'javascript',
  'sass',
  'watch',
  'browserify'
]);

gulp.task('default', ['watch', 'server','javascript', 'sass', 'browserify' ]);