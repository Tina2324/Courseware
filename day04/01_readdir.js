var fs = require('fs');

fs.readdir('./',{withFileTypes:true},function(err,files){
  if(err){
    console.log(err);
    return ;
  }
  console.log(files);
});