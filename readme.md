解决history模式路由请求404的问题

devServer: historyApiFallback: true, //任意的 404 响应都被替代为index.html
output: publicPath: '/',  // 引入打包的文件时路径以 / 开头

babel 本身不编译ES6 的语法
babel 需要基于它的plugin来做ES语法的编译
每个语法都有一个对应的babel plugin 来编译对应的语法
一个babel preset 包是包含多个babel-plugin 的集合包