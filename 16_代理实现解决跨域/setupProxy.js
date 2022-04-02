// 文档：https://create-react-app.dev/docs/proxying-api-requests-in-development

/*
  1.安装 http-proxy-middleware
  $ npm install http-proxy-middleware --save
  $ # or
  $ yarn add http-proxy-middleware
*/
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', { // /api是需要转发的请求，所有带api的请求都会被转发到5000端口
      target: 'http://localhost:5000', // 转发目标地址
      changeOrigin: true, // 控制服务器接收到的请求头中host字段值
      /**
       * true: 服务器接收到的host字段值为：localhost:5000
       * false: 服务器接收到的host字段值为：localhost:3000
       */
      pathRewrite: { '^/api': '' } // 去除请求前缀，保证交给后的服务器的是正常的请求
    })
  );
};