var fs = require('fs');

// 
var f = [];// 保存所有文件
var d = [];// 保存所有文件夹
fs.readdir('./',function(err,files){
  if(err){
    console.log(err);
    return;
  }
  // 使用自调函数遍历files
  (function iterate(i){
    // 先判定自调结束的条件
    if(i>=files.length){
      console.log(f);
      console.log(d);
      console.log('遍历结束');
      return;
    }
    fs.stat(files[i],function(err,stats){
      if(err){
        console.log(err);
        return ;
      }
      if(stats.isFile()){
        console.log(files[i]+' 是一个文件');
        f.push(files[i]);
      }else{
        console.log(files[i]+' 是一个文件夹');
        d.push(files[i]);
      }
      iterate(++i);
    });
  })(0);
})







/* fs.readdir('./',function(err,files){
  if(err){
    console.log(err);
    return ;
  }
  // 有问题，异步
  for(var i=0;i<files.length;i++){
    console.log('fs外面的 '+i);
    fs.stat(files[i],function(err,stats){
      if(err){
        console.log(err);
        return;
      }
      console.log('=====  '+i+'  =====')
      if(stats.isFile()){
        console.log(files[i]+' 是一个文件');
      }else{
        console.log(files[i]+' 是一个文件夹');
      }
    });
  }
}); */








/* fs.readdir('./',{withFileTypes:true},function(err,files){
  if(err){
    console.log(err);
    return ;
  }
  // console.log(files);
  // console.log(files[0]);
  // console.log(files[0].isDirectory());
  for(var i=0;i<files.length;i++){
    if(files[i].isDirectory()){
      // 判断是不是一个文件夹
      console.log(files[i].name+' 是一个文件夹');
    }else{
      console.log(files[i].name+' 是一个文件');
    }
  }
}); */




