var fs = require('fs');

fs.stat('./a.txt',function(err,stats){
  if(err){
    console.log(err);
    return ;
  }
  // stats是一个对象，Stats类型
  if(stats.isDirectory()){
    console.log('这是一个文件夹');
  }
  if(stats.isFile()){
    console.log('这是一个文件');
  }
});



