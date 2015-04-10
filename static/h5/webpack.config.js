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
      test: /\.js/,
      loaders: [
        'babel-loader'
      ]
    }]
  }
}