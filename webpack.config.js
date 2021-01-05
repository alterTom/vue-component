/**
 * 使用commonjs模块化语法
 * 向外暴露一个配置对象
 */

 const path = require('path')  //node内置
 //_dirname :全局变量,当前文件所在目录的绝对路径
 
 const HtmlWebpackPlugin = require('html-webpack-plugin')  //构造函数

 const {CleanWebpackPlugin} = require('clean-webpack-plugin');

 /**
  * 
  * @param {} dir 
  * 返回指定目录的绝对路径
  */
 function resolve(dir){
    return path.resolve(__dirname,dir)
 }


module.exports={

    mode: 'development',


    //入口
    //entry: './src/index.js',
    entry:{
        main: './src/index.js'
    },

    //出口
    output:{
        path:  resolve('dist') ,  //dist的绝对路径
        filename: '[name].bundle.js'
    },

    //模块加载器
    module:{
        rules:[  //内部配置loader
            {   // 处理ES6 转换 ES5
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,   //排除匹配的文件夹
                include: [resolve('src')] ,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'], // 配置的预设包 (包含了多个ES语法解析的plugins包)
                    plugins:[   //配置预设包之外的插件包

                    ]   

                  }
                }
            },

            {  //处理css
                test: /\.css$/,
                //css-loader : 将css转移到js中
                //style-loader : 将js中的css转移到html的<style> 标签
                use: [
                    'style-loader', 'css-loader'  //有顺序区分 loader 处理从下向上,从右向左
                ]

            },

            //处理图片
            {
                test: /\.png|jpe?g|git|svg$/,
                //loader: 'file-loader',  //url-loader 内部需要使用file-loader
                                        //file-loader 不会进行小图片的base64处理

                loader: 'url-loader' ,   //会进行小图片的base64处理
                options:{
                    limit : 1 * 1024 ,  //小于10看的图片就进行base64处理
                    name : 'static/img/[name].[hash:7].[ext]'  //相对于output.path
                }
                    

            
            }


        ]
    },

    //插件
    plugins:[   //插件实例对象
        new HtmlWebpackPlugin({
            template: 'index.html'  //在执行命令所在目录下查找
        }),

        new CleanWebpackPlugin(),  //清除打包文件夹dist
    ],

    devServer:{
        port: 8081,
        open : true,  //自动打开浏览器
        quiet : true  // 不做太多日志输出
    }

}
