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
      exclude: /node_modules/,
      loader: 'babel-loader?optional=runtime&compact=true&comments=false&sourceMaps=true',
    }]
  }
}