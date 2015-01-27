var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../gulpconfig').browserify;

module.exports = function () {

    var browserifyThis = function (bundleConfig) {

        var bundler = browserify({
            // Required watchify args
            cache: {}, packageCache: {}, fullPaths: true,
            // Specify the entry point of your app
            entries: bundleConfig.entries,
            // Add file extentions to make optional in your requires
            extensions: config.extensions,
            // Enable source maps!
            debug: true

        }, watchify.args);


        bundler = watchify(bundler);
        bundler.on('update', function () {
            rebundle();
        });

        function rebundle() {
            gutil.log('Rebundle...', gutil.colors.green(bundleConfig.entries));

            var stream = bundler.bundle();

            return stream.on('error', function (error) {
                console.log(arguments);
                gutil.colors.red(error);
            })
                .pipe(source(bundleConfig.outputName))
                //.pipe(buffer())
                //.pipe(sourcemaps.init({loadMaps: true}))
                //.pipe(uglify())
                //.pipe(sourcemaps.write())
                .pipe(gulp.dest(bundleConfig.dest));
        }

        return rebundle();
    };

    // Start bundling with Browserify for each bundleConfig specified
    config.bundleConfigs.forEach(browserifyThis);
};