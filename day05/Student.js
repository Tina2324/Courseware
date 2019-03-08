//Student类,创建学生模板
function Student(name,age){
    this.name = name;
    this.age = age; 
}
Student.prototype.study = function(){
    console.log(this.name+'正在学习......')
}
Student.prototype.sayHi = function(){
    console.log('你好,我是'+this.name+'今年'+this.age+'岁');
}
//暴露Student类
module.exports = Student;