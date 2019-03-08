console.log('这是02.js');
var a = 10;
console.log(a);
function add(a,b){
    console.log(a+"+"+b);
}
var name = "张三";
//暴露add方法
exports.add = add;
//暴露name属性
exports.name = name;