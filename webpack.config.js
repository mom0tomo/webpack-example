// https://qiita.com/soarflat/items/28bf799f7e0335b68186#webpack-cli%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public/js')
  },
  // ES2015（ES6）のコードをES5のコードに変換するローダーの設定
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        // enforce: 'pre'がついていないローダーより早く実行する
        // 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  }
};