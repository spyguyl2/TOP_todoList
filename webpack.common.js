const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//add date-fns require's here


module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|sv|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
  },
};