var path = require('path');
var WebPackConfig = new Object();
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var onDevMode = process.argv.indexOf('--dev') > -1;
var localIdentName = process.argv.indexOf('--css-module-test') > -1 ? '[local]' : '[name]__[local]___[hash:base64:5]';
var cssLoader = [
  'css?minimize&modules',
  'sourceMap',
  'importLoaders=1',
  'localIdentName=' + localIdentName
].join('&');

WebPackConfig.output = new Object();
WebPackConfig.module = new Object();
WebPackConfig.module.loaders = new Array();

WebPackConfig.entry = ['./src/main.js'];
WebPackConfig.devtool = 'source-map';

WebPackConfig.output.filename = 'bundle.js'
WebPackConfig.output.path = __dirname + '/build/assets/scripts'

WebPackConfig.module.loaders.push({
  test: /(\.jsx|\.js)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: ['es2015', 'react']
  }
})

WebPackConfig.module.loaders.push({
  test: /(\.jsx|\.js)$/,
  loader: "eslint-loader",
  exclude: [/node_modules/, /test/]
})

WebPackConfig.module.loaders.push({
  test: /\.scss$/,
  include: /src/,
  loaders: [
    'style',
    cssLoader,
    'postcss-loader',
    'sass?sourceMap'
  ]
});

// Don't treat global SCSS as modules
WebPackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: /src/,
  loaders: [
    'style',
    'css?-minimize',
    'postcss-loader',
    'sass?sourceMap'
  ]
});

// Don't treat global, third-party CSS as modules
WebPackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: /src/,
  loaders: [
    'style',
    cssLoader,
    'postcss-loader'
  ]
});


WebPackConfig.resolve = {
  root: path.resolve('src/'),
  extensions: ['', '.js', '.jsx']
};

WebPackConfig.module.postcss = [
  require('autoprefixer-core'),
  require('postcss-color-rebeccapurple')
]

WebPackConfig.module.plugins = [
  new ExtractTextPlugin('style.css', { allChunks: true })
]

module.exports = WebPackConfig;
