const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 用於處理 post data
const getPostData = (req, res) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    // 設置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    // 獲取 path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析 query
    req.query = querystring.parse(url.split('?')[1])

    // 處理 post data
    getPostData(req).then(postData => {
        req.body = postData

        // 處理 blog 路由
        // const blogData = handleBlogRouter(req, res)
        // if(blogData) {
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }
        const blogResult = handleBlogRouter(req, res)
        if(blogResult) {
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }

        // 處理 user 路由
        const userData = handleUserRouter(req, res)
        if(userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }

        // 未命中路由, 返回 404   
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.write("404 Not Found\n")
        res.end()
    })

    
}

module.exports = serverHandle