// https://qiita.com/soarflat/items/28bf799f7e0335b68186#webpack-cli%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public/js')
  }
};