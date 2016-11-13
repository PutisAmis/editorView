module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/index.jsx']
  },
  output: {
    path: './build',
    filename: '[name].js',
    publicPath: '/build/'
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}
