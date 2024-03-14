const http = require('http');
const path = require('path');
const url = require('url');

// 创建 HTTP 服务器

const server = http.createServer((req, res) => {
  // 设置响应头部
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*',
  });

  const { pathname} = url.parse(req.url);
  console.log(pathname);
  if (pathname.includes('/api') ){
    res.end('hello word!');
  }
  else{
    res.end(JSON.stringify({name: 'default'}));
  }
  
});

// 启动服务器，监听 8080 端口
server.listen(8080, () => {
  console.log(`Server running at http://127.0.0.1:8080/`);
});
