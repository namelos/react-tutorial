module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: 'src',
      loader: 'babel'
    }]
  }
}