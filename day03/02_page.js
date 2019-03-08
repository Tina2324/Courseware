// 引入http
var http = require("http");
//引入fs(file system)
var fs = require("fs");

// 创建服务
var server = http.createServer(function(req,res){
    // res.end(); 结束请求,但是没有返回数据
    // 使用fs 读取某个页面
    fs.readFile("./02_page.html",function(err,data){
        //err: 读取文件出错时的错误信息; data: 正确读取到了文件的数据
        if(err){
            //如果出错了,通知浏览器出错,读取数据失败
            res.end("Your page is not found!");
        }else{
            //没有出错,返回读取到的数据
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
            res.end(data);
        }
    })
});

// 开启服务,监听窗口
server.listen(4000);
