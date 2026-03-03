// 1. 引入 express 模块 (类似 Java 的 import)
const express = require('express');
const app = express();
const port = 3000;

// 2. 定义路由：当访问根路径 '/' 时，返回 Hello World
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>这是我的第一个 Node.js + npm 项目</p>');
});

// 3. 启动服务器，监听端口
app.listen(port, () => {
  console.log(`服务已启动！请访问：http://localhost:${port}`);
});