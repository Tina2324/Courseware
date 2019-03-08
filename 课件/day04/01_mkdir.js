var fs = require('fs');

fs.mkdir('./a',function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('创建文件夹成功');
})