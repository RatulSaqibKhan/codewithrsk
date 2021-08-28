const path = require('path')
const webpack = require('webpack')


module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    alias: {
      '@': path.resolve(__dirname, './frontend/src')
    }
  }
}
