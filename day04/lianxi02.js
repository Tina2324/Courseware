var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname;// 请求地址
  var query = urlObj.query;// 请求参数
  if(pathname=='/tijiao'){
    // 获取参数
    var username = query.username;
    var password = query.password;
    fs.writeFile(username+'.txt',password,function(err){
      if(err){
        console.log(err);
        // 通知浏览器出错了
        res.end('ERROR');
        return;
      }
      // 没有出错,通知浏览器成功了
      res.end('SUCCESS');
    });
  }else{
    //返回数据，不结束请求
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write('<form action="/tijiao">');
    res.write('username:<input type="text" name="username">');
    res.write('password:<input type="text" name="password">');
    res.write('<input type="submit" value="SUBMIT">');
    res.write('</form>');
    res.end();
  }


});
server.listen(4000);