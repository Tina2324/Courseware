var http = require('http');
var route = require('./route.js');
//创建服务
var server=http.createServer(function(req,res){
    //排除小图标的请求 /favicon.ico
    if(req.url=='/favicon.ico'){return;};
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    if(req.url=="/"){
        // res.end(route.banner)
        route.showIndex(req,res);
    }else if(req.url=="/info"){
        // res.end(route.message)
        route.infoIndex(req,res);
    }else{
        // res.end(route.error);
        route.errIndex(req,res);
    }
});
// 开启服务,监听窗口
server.listen(4000);