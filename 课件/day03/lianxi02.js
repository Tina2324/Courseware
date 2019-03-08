var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  var urlStr = req.url;// 字符串地址
  var urlObj = url.parse(urlStr,true);// url对象
  var pathname = urlObj.pathname;// 地址
  var query = urlObj.query;// 请求参数
  if(pathname=='/tijiao'){
    var username = query.username;
    var password = query.password;
    if(username=='zhangsan'&&password=='123'){
      res.end('login success!');
    }else{
      res.end('username or password error');
    }
  }else{
    // 读取登录页面
    fs.readFile('./lianxi02.html',function(err,data){
      if(err){
        console.log(err);
        res.end('read page error');
        return ;
      }
      res.end(data);
    })
  }

});
server.listen(4000);