var fs = require('fs');
function delDir(path){
    //因为异步执行顺序的问题,采用同步方法
    //先检查path是否是文件夹
    var stats = fs.statSync(path);
    if(stats.isDirectory()){ //是文件夹
       //读取文件夹内容
       var files = fs.readdirSync(path);
       for(var i=0;i<files.length;i++){
           var newPath = path+"/"+files[i]; //文件夹内容的路径
           var newStats = fs.statSync(newPath);
           if(newStats.isDirectory()){ //文件夹
                //删文件夹
                delDir(newPath);
           }else{ //文件
                //删文件
                fs.unlinkSync(newPath);
           }
       }
       //删自己
       fs.rmdirSync(path);
    }else{ //是文件
        fs.unlinkSync(path);
    }
}
delDir("a");