module.exports = {
  entry: './app.jsx',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: [
        'babel-loader'
      ]
    }]
  }
}