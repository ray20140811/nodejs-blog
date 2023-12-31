const http = require('http');
const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//   console.log('method: ', req.method) // GET
//   const url = req.url     // 獲取請求的完整 url
//   console.log('url: ', url)
//   req.query = querystring.parse(url.split('?')[1])   //解析 querystring
//   console.log('query: ', req.query)
//   res.end(JSON.stringify(req.query)) // 將 querystring 返回
// })

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         // req 數據格式
//         console.log('req content-type: ', req.headers['content-type'])
//         // 接收數據
//         let postData = ''
//         req.on('data', chunk => {
//             postData += chunk.toString()
//         })
//         req.on('end', () => {
//             console.log('postData: ', postData)
//             res.end('hello world!')
//         })
//     }
// })

// const server = http.createServer((req, res) => {
//     const url = req.url
//     const path = url.split('?')[0]
//     res.end(path)   //返回路由
// });

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 設置返回格式為 JSON
    res.setHeader('Content-type', 'application/json')
    
    // 返回的數據
    const resData = {
        method,
        url,
        path,
        query
    }

    // 返回
    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }
    if (method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            resData.postData = postData
            // 返回
            res.end(
                JSON.stringify(resData)
            )
        })
    }
});

server.listen(8000);
console.log('OK')