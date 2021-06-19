module.exports = {
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader')
      .tap((options) => {
        options.fix = true // auto-fix option
        return options
      })
  },
  // devServer: {
  //   port: 8080,
  //   proxy: {
  //       '^/api': {
  //           target: 'http://localhost:3000',
  //           changeOrigin: true
  //       }
  //   }
  // }
}