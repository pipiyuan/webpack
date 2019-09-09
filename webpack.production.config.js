const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/index.js', //已多次提及的唯一入口文件
	output: {
		path: __dirname+'/build',	//打包后的文件存放的地方
		filename: 'bundle.js'			//打包后输出文件的文件名
	},
	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	// postcss: [
	// 	require('autoprefixer')
	// ],
	plugins: [
		new webpack.BannerPlugin('This file is created by pp'),
		new htmlWebpackPlugin({template:__dirname+'/app/index.html'}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name]-[id].css')
	],
	devServer: {
		contentBase: './build',	//本地服务器所加载的页面所在的目录
		port: '8080',
	    historyApiFallback: true,	//不跳转; 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	    inline: true				//实时刷新
	}
}















