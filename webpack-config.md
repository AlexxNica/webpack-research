# webpack-config

## context

### [绝对路径] 查找 entry 

## entry

bundle的入口点

* string 这个字符串启动时被当做一个模块
    
* array 所有的模块在启动时被加载,最后一个被输出
    
* object 多个入口bundle被输出「key是bundle名称，value可以是string或者array(同上两个情况)」

## output

### filename

入口块的文件名，相对于`output.path`的路径

* [name]将会被chunk名替换
* [hash]被完成时的hash值替换
* [chunkhash] 被chunk的hash值替换

### path

输出的**绝对路径**(必须)
[hash]在完成后将会替换为hash值

### chunkFilename

不是入口chunk的文件名

* [id] 被chunk的id替换
* [name] 被chunk的名称替换
* [hash] 被编译时的hash值替换


### sourceMapFilename

js文件的sourcemap文件名

* [file] 替换成js文件名
* [id] chunk id
* [hash]

_默认 "[file].map"_

### devtoolModuleFilenameTemplate

### devtoolFallbackModuleFilenameTemplate

### devtoolLineToLine

### hotUpdateChunkFilename

热更新chunk的文件名
_Default: "[id].[hash].hot-update.js"_

### hotUpdateMainFilename

The filename of the Hot Update Main File. It is inside the output.path directory.
_Default: "[hash].hot-update.json"_

### publicPath

相对于浏览器的地址,就是在浏览器中访问的地址，比如
```
{
	output: {
    	path: '/home/www/assets',
        publicPath: 'http://img.xx.com/assets'
    }
}
```
意思说将文件打包到`/home/www/assets`的本地目录,而它的访问地址是`http://img.xx.com/assets`

### jsonpFunction

The JSONP function used by webpack for asnyc loading of chunks._Default: "webpackJsonp"_

### hotUpdateFunction

The JSONP function used by webpack for async loading of hot update chunks._Default: "webpackHotUpdate"_

### pathinfo

### library

设置了此项，bundle被当做library输出,`output.library` 被当做名称

### libraryTarget

以何种形式输出库：

* var 以变量的方式输出 `var Library = xx` _defualt_
* this 以 `this` 属性的方式输出 `this.library = xxx`
* commonjs 以 `exports`属性的方式输出 `exports.library = xxx`
* commonjs2 以 `module.exports = xxx` 的方式输出
* amd 输出为AMD
* umd 输出适配 AMD, Commonjs2 或者 root 属性

### sourcePrefix

### crossOriginLoading

开启跨域加载

* false 关闭跨域加载 _defualt_
* anonymous
* use-credentials

## module

### loaders

自动应用的loaders __[array]__

#### test

实施条件(正则)A condition may be a RegExp, a string containing the absolute path, a function(absPath): bool, or an array of one of these combined with “and”.

#### exclude

排除情况

#### include

包含情况，通常用来指定那些文件夹中的文件被loader所处理__array__

#### loader

以__!__分割的loaders

#### loaders

loader数组

### preLoaders

### postLoaders

### noParse

支持正则或者数组中的系列正则，来过滤那些类库不需要被解析。
_忽略一些大的类库可以提升性能_

>The files are expected to have no call to require, define or similar. They are allowed to use exports and module.exports.

### xxxContextXxx

## resolve

### alias

使用其他模块或者路径替换模块。__Object__
key是模块名,value是新路径

### root

包含模块文件夹的绝对路径__string or array__

### modulesDirectories

定义查找模块的目录__指定义文件名就好了！__
_Default: ["web_modules", "node_modules"]_

### fallback

一个目录或者数组目录［绝对路径］如果通过`resolve.root` 和 `resolve.modulesDirectories`找不到的话就去这个目录找

### extensions

用来解析的模块的扩展名
_Default: ["", ".webpack.js", ".web.js", ".js"]_, 如果想 `require('test')` 来查找 `coffee` 文件，把 `.coffee` 加入数组即可.

>you must include an empty string in your array

### packageMains

检查 `package.json`中的指定字段的文件._Default: ["webpack", "browser", "web", "browserify", ["jam", "main"], "main"]_

### packageAlias

在`package.json`的指定字段查找出一个`object` 作为 `resolve.alias`

### unsafeCache

## resolveLoader

和 `resolve` 一样但是是为了配置`loaders`

### same with resolve

### moduleTemplates

It describes alternatives for the module name that are tried._Default: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]_

## externals

定义不需要被`webpack`解析的依赖，但是必须成功解析出来的bundle的依赖

## target

## bail

## profile

## cache

缓存生成的模块和chunk来提升性能, `false`关闭，在watch模式默认开启

## watch

进入watch模式

## watchOptions

### aggregateTimeout

### poll

### debug

### devtool

#### eval

#### source-map

#### hidden-source-map

#### inline-source-map

#### eval-source-map

#### cheap-source-map

#### cheap-module-source-map

## devServer

对`webpack-dev-server`进行配置

## node

Include polyfills or mocks for various node stuff:

* console: true or false
* global: true or false
* process: true, "mock" or false
* Buffer: true or false
* __filename: true (real filename), * "mock" ("/index.js") or false
* __dirname: true (real dirname), * "mock" ("/") or false
* <node buildin>: true, "mock", * "empty" or false

## plugins

插件配置
