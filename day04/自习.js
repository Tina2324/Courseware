var http =require('http');
var fs = require('fs');
var url = require('url');

//创建服务
var server=http.createServer(function(req,res){
    //排除小图标的请求 /favicon.ico
    if(req.url=='/favicon.ico'){return;};
    //获取请求路径
    var pathname = url.parse(req.url).pathname;
    if(pathname=='/'){pathname = "/lianxi03.html";}
    var path = "project"+pathname;
    fs.readFile(path,function(err,data){
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    })
});
// 开启服务,监听窗口
server.listen(4000);