const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const Assets = require('../assets');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '8080'
  },
  plugins: [
    new CopyPlugin({
      patterns: Assets.map(asset => {
        return {
          from: path.resolve(__dirname, `../node_modules/${asset}`),
          to: path.resolve(__dirname, '../dist/libs')
        };
      })
    })
  ]
};

