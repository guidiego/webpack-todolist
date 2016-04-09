var path = require('path');
var WebPackConfig = new Object();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  exclude: /node_modules/
})

WebPackConfig.module.loaders.push({
  test: /\.scss$/,
  loader: 'style!css?modules!sass'
})

// WebPackConfig.resolve = {
//   root: path.resolve('./src'),
//   extensions: ['', '.js', '.jsx']
// };

WebPackConfig.module.postcss = [
  require('autoprefixer-core'),
  require('postcss-color-rebeccapurple')
]

WebPackConfig.module.plugins = [
  new ExtractTextPlugin('style.css', { allChunks: true })
]

module.exports = WebPackConfig;
