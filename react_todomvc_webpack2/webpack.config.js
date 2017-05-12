const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// let extractCSS = new ExtractTextPlugin('./app/style/[name].css');
// let extractLESS = new ExtractTextPlugin('./app/style/entries/[name].less');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/main.jsx', //已多次提及的唯一入口文件
	output: {
		path: path.resolve(__dirname, 'build'),	//打包后的文件存放的地方
		filename: 'bundle.js'			//打包后输出文件的文件名
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/, 
			// 	use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'postcss-loader'])
			// },
			{
				test: /\.less$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader', 
					use: ['css-loader', 'postcss-loader', 'less-loader']
				})
			},
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash:5].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							progressive: true,
							pngquant: {
								quality: '65-90',
								speed: 4
							}
						}
					}	
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by pp'),
		new htmlWebpackPlugin({
			template:__dirname+'/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name]-[id].css')
	],
	resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
	devServer: {
		// contentBase: './app',	//本地服务器所加载的页面所在的目录
		port: '8080',
		open: true,
	    historyApiFallback: true,	//不跳转; 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	    inline: true,				//实时刷新
	    proxy: {
	    	'/api/*':{
	    		target: 'http://m.maoyan.com',
	    		changeOrigin: true,
	    		pathRewrite: {'^/api': ''},
	    	}
	    }
	}
}















