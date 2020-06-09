const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:2500'
      }
    }
  }
}