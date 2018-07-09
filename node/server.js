var http = require('http');

http.createServer(function (request, response) {
   // createServer是一个函数，他的参数为是一个函数，createServer方法返回的是一个对象，
   // 这个对象有拥有一个listen方法，参数是指定这个 HTTP 服务器监听的端口号

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
