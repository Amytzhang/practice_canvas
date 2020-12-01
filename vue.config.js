
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  outputDir: 'distName',
  assetsDir: 'static'
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
}
