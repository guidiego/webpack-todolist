var webpackConfig = require('./webpack.config');
var onDevMode = process.argv.indexOf('--dev') > -1;
var reporters = onDevMode ? ['spec'] : ['spec', 'coverage'];

webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: !onDevMode,
    frameworks: [ 'mocha', 'chai', 'sinon', 'sinon-chai' ],
    files: [
      'tests.webpack.js'
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-sinon',
      'karma-sinon-chai'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: reporters,
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      reporters: [
        {type: 'text-summary'},
        {type: 'html', dir: 'coverage'}
      ]
    },
    autoWatch: true
  });
};
