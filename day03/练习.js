// 引入http
var http = require('http');
var url = require('url');
var fs = require("fs");

//创建服务
var server=http.createServer(function(req,res){
    //排除小图标的请求 /favicon.ico
    if(req.url=='/favicon.ico'){return;};
    //获取请求地址
    var urlStr = req.url; //字符串格式的请求地址
    //通过url模块将字符串格式的地址转换为对象
    var urlObj =url.parse(urlStr,true);
    //获取请求路径
    var pathname = urlObj.pathname;
    //判断请求路径,根据不同的路径返回不同的响应结果
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    if(pathname=='/'){ //localhost:4000
        res.end("这是首页");
    }else if(pathname=='/circle'){ //localhost:4000/circle
        //读取圆形页面
        fs.readFile("./圆形.html",function(err,data){
            if(err){  //读取出错
                console.log(err);
                res.end("读取出错")
                return;
            }
            //读取成功,返回数据
            res.end(data);
        })
    }else if(pathname=='/square'){ //localhost:4000/square
        //读取方形页面
        fs.readFile("./方形.html",function(err,data){
            if(err){  //读取出错
                console.log(err);
                res.end("读取出错")
                return;
            }
            //读取成功,返回数据
            res.end(data);
        })
    }else{ //其他错误地址
        res.end('地址错误');
    }
});
// 开启服务,监听窗口
server.listen(4000);