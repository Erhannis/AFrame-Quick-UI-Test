const webpack = require('webpack');

let PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: PLUGINS,
  devServer: {
    disableHostCheck: true
  }
};
