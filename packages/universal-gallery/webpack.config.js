module.exports = [
  {
    entry: {
      index: './index'
    },
    output: {
      filename: 'dist/[name].js',
      libraryTarget: 'commonjs2'
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
  },
  {
    entry: {
      test: './test',
    },
    output: {
      filename: 'dist/[name].js',
      libraryTarget: 'commonjs2'
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
