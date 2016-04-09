var loaders = [
  require('./webpack/babel-loader')
]

module.exports = {
  entry: './src/main.js',
  output: {
      filename: 'bundle.js',
      path: './build/assets/scripts'
  },
  module: {
    loaders: loaders
  }
}
