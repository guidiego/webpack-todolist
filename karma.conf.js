var webpackConfig = require('./webpack.config');
var path = require('path');
var onDevMode = process.argv.indexOf('--dev') > -1;
var reporters = onDevMode ? ['spec'] : ['spec', 'coverage'];

webpackConfig.devtool = 'inline-source-map';
if (!onDevMode) {
  //@TODO Turn it PRELOADER
  webpackConfig.module.postLoaders = [{
    test: /\.js$/,
    exclude: [/node_modules/, /test/],
    loader: 'istanbul-instrumenter'
  }]
}

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: !onDevMode,
    frameworks: [ 'mocha', 'chai', 'sinon', 'sinon-chai' ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/bundler.js'
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
      'test/bundler.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: reporters,
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'text-summary'},
        {type: 'html', subdir: 'graph'},
        {type: 'lcov', subdir: 'lcov' }
      ]
    },
    autoWatch: true
  });
};
