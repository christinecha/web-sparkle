module.exports = {
  watch: true,
  entry: {
    test: './test',
    index: './index'
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader']
    }]
  }
}
