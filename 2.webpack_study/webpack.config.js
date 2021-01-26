const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlguin = new HtmlWebpackPlugin({
  template: './src/index.html', //根据此模板生成文件
  filename: 'index.html'
})

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 编译模式
  mode: 'development', // development  production 打包模式
  entry: path.join(__dirname, './src/index.js'), //入口.默认就是这个
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称  打包只后的文件文字
  },
  plugins: [htmlPlguin, new VueLoaderPlugin()], //使用插件
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=233,994' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' }

    ]
  }
}
