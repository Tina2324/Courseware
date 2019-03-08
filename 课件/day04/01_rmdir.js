var fs = require('fs');

fs.rmdir('./a',function(err){
  if(err){
    console.log(err);
    return ;
  }
  console.log('删除成功');
});