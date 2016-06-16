const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src/components'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, './dist/resource'),
    publicPath: "/dist/",
    filename: 'entry.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "react-hot!babel", include: path.join(__dirname, 'src')},
      {test: /\.styl$/, exclude: /node_modules/, loader: "style!css!postcss!stylus"},
      {test: /\.gif$/  , loader: "url?limit=10000&mimetype=image/gif" },
      {test: /\.jpg$/  , loader: "url?limit=10000&mimetype=image/jpg" },
      {test: /\.png$/  , loader: "url?limit=10000&mimetype=image/png" },
      {test: /\.woff$/ , loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.woff2$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
      {test: /\.ttf$/  , loader: "file?mimetype=application/vnd.ms-fontobject"},
      {test: /\.eot$/  , loader: "file?mimetype=application/x-font-ttf"},
      {test: /\.svg$/  , loader: "file?mimetype=image/svg+xml"}
    ],
    resolve: {
      extensions: ['', '.js', '.styl']
    }
  },
  postcss: [autoprefixer],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MIS通用专题',
      filename: '../../dist/template/index.html'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    })
  ]
}
