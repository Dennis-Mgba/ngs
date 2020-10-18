const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Server is running...');
});
