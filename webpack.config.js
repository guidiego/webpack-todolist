var WebPackConfig = new Object();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

WebPackConfig.output = new Object();
WebPackConfig.module = new Object();
WebPackConfig.module.loaders = new Array();

WebPackConfig.entry = './src/main.js';

WebPackConfig.output.filename = 'bundle.js'
WebPackConfig.output.path = './build/assets/scripts'

WebPackConfig.module.loaders.push({
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: ['es2015', 'react']
  }
})

WebPackConfig.module.loaders.push({
  test: /\.scss$/,
  loader: 'style!css?modules!sass'
})

WebPackConfig.module.postcss = [
  require('autoprefixer-core'),
  require('postcss-color-rebeccapurple')
]

WebPackConfig.module.plugins = [
  new ExtractTextPlugin('style.css', { allChunks: true })
]

module.exports = WebPackConfig;
