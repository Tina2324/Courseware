//引用下载的silly-datetime模块
// var sd = require('silly-datetime');
// var str = sd.format(new Date(),'YYYY年MM月DD日 HH时 mm分ss秒');
// console.log(str);

//引入fecha模块
var fecha = require('fecha');
var fe = fecha.format(new Date(), 'YYYY年MM月DD日 HH时:mm分:ss秒 A'); 
console.log(fe);