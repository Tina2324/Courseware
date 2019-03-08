var fs = require('fs');

// wirteFile方法
var msg = '这是用writeFile方法写入的数据';

/* console.log(1);
// 异步方法
fs.writeFile('./test.txt',msg,function(err){
  if(err){
    console.log(err);
    return ;
  }
  console.log('写入数据成功');
});
console.log(2); */

// 同步方法
console.log(1);
fs.writeFileSync('./test.txt','同步方法');//返回值undefined
console.log(2);





/* fs.appendFile('./test.txt','\nAAAA',function(err){
  if(err){
    console.log(err);
    return ;
  }
  console.log('追加成功');
}); */


