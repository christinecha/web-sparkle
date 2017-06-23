module.exports = {
  watch: true,
  entry: {
    test: './test'
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    path: __dirname + '/dist'
  }
}
