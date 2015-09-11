import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3001',
      'webpack/hot/only-dev-server',
      './src/client/entry.js',
      './assets/stylesheets/application.scss'
    ],
  },
  output: {
    path: __dirname + '/dist/assets',
    filename: '[name].js',
    publicPath: 'http://localhost:3001/assets',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css-loader!sass-loader?includePaths[]=" + __dirname +"/node_modules") },
      { test: /\.woff(\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}
