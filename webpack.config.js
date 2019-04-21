const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : `${__dirname}/app/index.html`,
  filename : 'index.html',
  inject : 'body'
})
module.export = {
  entry : 
}
