var fs = require('fs');

/* fs.readFile('./day04.txt',function(err,data){
  if(err){
    console.log(err);
  }else{
    // data是一个buffer字符流，使用toString方法将其转换为字符串
    console.log(data.toString());
  }
}) */

// 同步读取文件
// var data = fs.readFileSync('./day04.txt');

// console.log(data.toString());

var start = new Date();//开始的时间

/* fs.readFile('./stage2.rar',function(err,data){
  if(err){
    console.log(err);
    return ;
  }
  console.log('读取完毕');
}) */
var data = fs.readFileSync('./stage2.rar');
console.log('读取完毕');


var end = new Date();//结束的时间

console.log('总共耗时：'+(end - start)+'ms');