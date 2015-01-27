var gulp = require('gulp');

require('./gulptask')([
    'browserify',
    'sass',
    'watch',
    'copyFiles',
    'server'
]);

gulp.task('default', ['watch', 'browserify', 'sass','copyFiles','server']);
gulp.task('build', ['browserify', 'sass', 'copyFiles', 'server']);