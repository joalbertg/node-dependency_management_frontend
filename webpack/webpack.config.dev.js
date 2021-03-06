const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const Assets = require('../assets');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js'
  },
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '8080'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/index.html'),
    }),
    new CopyPlugin({
      patterns: Assets.map(asset => {
        return {
          from: path.resolve(__dirname, `../node_modules/${asset}`),
          to: path.resolve(__dirname, '../build/libs')
        };
      })
    })
  ]
};

