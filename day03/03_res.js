// 引入http
var http=require('http');
//创建服务
var server=http.createServer(function(req,res){
    //排除小图标的请求 /favicon.ico
    if(req.url=='/favicon.ico'){return;};
    //返回数据,但是不结束请求
    //res.write("first");
    //res.write("second");
    //res.write("third");   
    res.end("hello") ; //结束请求
});
// 开启服务,监听窗口
server.listen(400);