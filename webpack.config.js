/**
 * 使用commonjs模块化语法
 * 向外暴露一个配置对象
 */

 const path = require('path')  //node内置
 //_dirname :全局变量,当前文件所在目录的绝对路径
 
 const HtmlWebpackPlugin = require('html-webpack-plugin')  //构造函数

 const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={

    mode: 'development',


    //入口
    //entry: './src/index.js',
    entry:{
        main: './src/index.js'
    },

    //出口
    output:{
        path: path.resolve(__dirname,'dist'),  //dist的绝对路径
        filename: '[name].bundle.js'
    },

    //模块加载器
    module:{
        rules:[  //内部配置loader

        ]
    },

    //插件
    plugins:[   //插件实例对象
        new HtmlWebpackPlugin({
            template: 'index.html'  //在执行命令所在目录下查找
        }),

        new CleanWebpackPlugin(),  //清除打包文件夹dist
    ]

}
