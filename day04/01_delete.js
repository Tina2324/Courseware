var fs = require('fs');

fs.unlink('./test.txt',function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('删除成功');
});