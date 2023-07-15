const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  console.log('method: ', req.method) // GET
  const url = req.url     // 獲取請求的完整 url
  console.log('url: ', url)
  req.query = querystring.parse(url.split('?')[1])   //解析 querystring
  console.log('query: ', req.query)
  res.end(JSON.stringify(req.query)) // 將 querystring 返回
})
server.listen(8000);
console.log('OK')