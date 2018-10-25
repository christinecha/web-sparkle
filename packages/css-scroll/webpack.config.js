module.exports = [
  {
    entry: {
      index: './index',
      test: './test'
    },
    output: {
      filename: 'dist/[name].js',
    },
    devServer: {
      contentBase: __dirname + '/',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loaders: [ 'babel-loader' ],
          exclude: /node_modules/
        }
      ]
    }
  }
]
