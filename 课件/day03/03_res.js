var http = require('http');
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  // 返回数据，但是不结束请求
  res.write('First');
  res.write('Second');
  res.write('Third');
  res.end(); // 结束请求

});
server.listen(4000);