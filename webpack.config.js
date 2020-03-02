const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    path.resolve('src/index.tsx'),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'css', 'png'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: 'chrome'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|svg|css)$/,
        loader: 'file-loader',
        options: {
            name: 'assets/[name].[ext]',
        }
    }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
