module.exports = {
  watch: true,
  entry: './example',
  output: {
    filename: 'bundle.js',
    publicPath: '/example/',
    path: './example'
  },
  module: {
    loaders: [{
      test: /\.js?$/
    }]
  }
};
