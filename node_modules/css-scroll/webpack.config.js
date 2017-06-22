module.exports = {
  watch: true,
  entry: './test',
  output: {
    filename: 'bundle.js',
    publicPath: '/test/',
    path: './test'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader']
    }]
  }
}
