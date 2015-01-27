#my gulpfile scaffold

</br>

1. Each task is split into the 'gulptask' folder. And in the `'/gulptask/index.js'`, we have this:

    ```js
    var path = require('path');
    var gulp = require('gulp');

    module.exports = function (tasks) {
      tasks.forEach(function (name) {
        gulp.task(name, require(path.join(__dirname, name)));
      });

      return gulp;
    };
    ```

    so that's easy to register all our tasks in the entry file `'gulpfile.js'`:

    ```js
    var gulp = require('gulp');

    require('./gulptask')([
      'javascript',
      'sass',
      'watch',
      'browserify'
    ]);
    ```

    (In fact gulp will export a singleton instance, you can also register your tasks in single file. This depends on ourself.)

2. I have 4 tasks currently. Let's have a look into it.

 **`javascript` task**:

    All our configuration is in the `'gulpconfig.js'` file. check it:

    ```js
    ...
    //'gulpconfig.js' file
    script: {
      src: src + 'scripts/non-browserify/**/*.js ',
      vendor: ['jquery.js','selectivizr.js'],
      dest: dest + 'javascript'
    },
    ...
    ```

    so all our vendor libs in the `'src/scripts/vendor/*.js'` will be concatenated and uglified together. The sequence of them will be just as the sequence in the `'vendor'` array. It means `jquery.js` will be the first one and `selectivizr.js` will be the second one to concat.

    After all the libs are concatenated, our own code in the `'src/scripts/non-browserify/**/*.js'` will concat togther. Finally our code here will concat to `'htdocs/javascript/script.js'`

   **`sass` task**:

    All scss files will be compiled into css files. Check the configuration:
    ```js
    ...
    //'gulpconfig.js' file
    style: {
      src: src + 'stylesheets/**/*.scss',
      vendor: src + 'stylesheets/vendor/**/*.css',
      dest: dest + 'css'
    },
    ```
    Also the vendor css will be concat at first, like js vendor files.

  **`Browserify` task:**

    As the configuration:
    ```js
    ...
    //'gulpconfig.js' file
     browserify: {
      // Enable source maps
      debug: true,
      // A separate bundle will be generated for each
      // bundle config in the list below
      bundleConfigs: [
        {
          entries: src + 'scripts/browserify/index.js',
          dest: dest + 'javascript/browserify/',
          outputName: 'bundle.js'
        }
      ]
    }
    ```
    It will browserify our code from the entry file, we can have mutiple entries.

    The **watchify** is used too!

  **`watch` task**

  ```js
  //gulptask/watch.js
  gulp.watch(config.script.src, ['javascript']);
  gulp.watch(config.style.src, ['sass']);
  ```
  gulp watch will deal with `javascript` and `sass` task. And the watchify will deal with browserify code watch.# gulp-for-shim
