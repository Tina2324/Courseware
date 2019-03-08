var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  
  // 获取请求路径
  var pathname = url.parse(req.url).pathname;
  
  /*
  pathname请求地址 ====>  读取的文件
  /                ===>   project/lianxi.html
  (pathname=/lianxi.html)
  /js/index.js     ===>   project/js/index.js
  /css/index.css   ===>   project/css/index.css
  /imgs/xxx.jpg    ===>   project/imgs/xxx.jpg
  */

  if(pathname=='/'){
    pathname = '/lianxi03.html';
  }
  var path = 'project'+pathname;
  fs.readFile(path,function(err,data){
    if(err){
      res.end(err);
    }else{
      res.end(data);
    }
  });
  
});
server.listen(4000);