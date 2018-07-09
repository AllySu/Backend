/*
* @Author: Administrator
* @Date:   2018-06-29 15:17:55
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-04 16:10:26
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('hello world');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
