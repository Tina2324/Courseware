// 引入http
var http=require('http');
// 引入url模块(该模块是nodejs封装好的处理请求地址的模块)
var url = require('url'); 
//创建服务
var server=http.createServer(function(req,res){
    //排除小图标的请求 /favicon.ico
    if(req.url=='/favicon.ico'){return;};
    var urlString = req.url;
    //url.parse() 解析格式化字符串格式的请求地址,将其转换为url对象
    //第一个参数为字符串请求地址.第二个参数为可选参数,默认为false
    //如果为true,则返回query值为一个对象
    var urlObject = url.parse(urlString,true);
    console.log(urlObject);
    res.end(); //结束请求
});
// 开启服务,监听窗口
server.listen(4000);