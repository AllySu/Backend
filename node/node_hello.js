function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
// exports.world = function () {
//   // 这是原始导出方法，被引入在文件直接使用world方法
// }
module.exports = Hello;
