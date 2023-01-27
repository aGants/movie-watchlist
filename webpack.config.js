const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniSccExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';
const prodMode = mode === 'production';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
    filename: prodMode ? "[name].[contenthash].js" : '[name].js'
  },
  devServer: {
    port: 3001,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader",]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          prodMode ? MiniSccExtractPlugin.loader : 'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: !prodMode
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !prodMode
            }
          }
        ]
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        exclude: /fonts/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: "file-loader"
      }
    ]
  }, resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniSccExtractPlugin({
      filename: prodMode ? "[name].[contenthash].css" : '[name].css'
    }),
    new CleanWebpackPlugin(),
  ],
}