const path = require('path');
const webpack = require('webpack');

require('dotenv').config({ path: './.env' });

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
        test: /\.s[ac]ss$/,
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
    alias: {
      'core': path.resolve(__dirname, 'src/'),
      'components': path.resolve(__dirname, 'src/components'),
      'styled': path.resolve(__dirname, 'src/styled'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniSccExtractPlugin({
      filename: prodMode ? "[name].[contenthash].css" : '[name].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
}
