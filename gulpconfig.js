var path = require('path');

var src = path.join(__dirname, 'src/')
  , dest = path.join(__dirname, 'htdocs/');

module.exports = {
  src: src,
  dest: dest,
  script: {
    src: src + 'scripts/non-browserify/**/*.js ',
    vendor: ['jquery.js'],
    dest: dest + 'javascript'
  },
  style: {
    src: src + 'stylesheets/**/*.scss',
    vendor: src + 'stylesheets/vendor/**/*.css',
    dest: dest + 'css'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    // extensions: ['.coffee'],
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
};

