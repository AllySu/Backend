// 阻塞运行方式

var fs = require("fs");

var data = fs.readFileSync('input.txt');  // data为对象，含有toString方法

console.log(data.toString());
console.log("程序执行结束!");
