// var banner = "这是首页";
// var message = "这是信息页";
// var error = "这是错误页";
// exports.banner = banner;
// exports.message = message;
// exports.error = error;

function showIndex(req,res){
    console.log(req.url);
    res.end('这是首页')
}
function infoIndex(req,res){
    console.log(req.url);
    res.end('这是信息页')
}
function errIndex(req,res){
    console.log(req.url);
    res.end('这是错误页')
} 
exports.showIndex=showIndex;
exports.infoIndex=infoIndex;
exports.errIndex=errIndex;