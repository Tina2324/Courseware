// 引入http
var http = require('http');

// 通过http对象,创建服务器
var server = http.createServer(function(req,res){
    // 服务器做的事---> req:浏览器发送过来的请求; res:服务器返回的响应
    // 返回一个字符串
    // 为防止乱码出现,需要设置响应头告诉浏览器解码方式
    // res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end('<!DOCTYPE html>'+
    '<html lang="en">'+
    '<head>'+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
        '<title>Document</title>'+
    '</head>'+
    '<body>'+
        '<div>这是中文</div>'+
    '</body>'+
    '</html>')
    /* end只能出现一次(一次请求,一次响应)
       end的作用: 结束请求,返回响应*/

    // res.end('this is my first nodejs'); 
    // res.end('这是中文');
});

//开启服务,监听端口
server.listen(4000);